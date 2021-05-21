import { Component, OnInit } from '@angular/core';
import BigNumber from 'bignumber.js';
import { BootService } from '../services/boot.service';

@Component({
    selector: 'app-reward-info',
    templateUrl: './reward-info.component.html',
    styleUrls: ['./reward-info.component.less']
})
export class RewardInfoComponent implements OnInit {

    rewardAPY: BigNumber = new BigNumber(0);

    constructor(public boot: BootService) { }

    ngOnInit(): void {
        this.boot.initContractsCompleted.subscribe(() => {
            this.getRewardAPY().then(rApy => {
                this.rewardAPY = rApy.multipliedBy(100);
            });
        });
    }

    allocationPercent() {
        return this.boot.poolInfo.allocPoint.div(this.boot.poolInfo.totalAllocPoint).multipliedBy(100);
    }

    farmingRewardPercent() {
        return this.boot.poolInfo.shareRewardRate.multipliedBy(100);
    }

    farmingRewardAmt() {
        return this.boot.poolInfo.shareRewardRate.multipliedBy(this.boot.poolInfo.tokenBalance.multipliedBy(this.allocationPercent().div(100))).toFormat(2, BigNumber.ROUND_DOWN) + " " + this.boot.tokenSymbol;
    }

    volRewardPercent() {
        return this.boot.poolInfo.swapRewardRate.multipliedBy(100);
    }

    volRewardAmt() {
        return this.boot.poolInfo.swapRewardRate.multipliedBy(this.boot.poolInfo.tokenBalance.multipliedBy(this.allocationPercent().div(100))).toFormat(2, BigNumber.ROUND_DOWN) + " " + this.boot.tokenSymbol;
    }

    tokenBalance() {
        return this.boot.poolInfo.tokenBalance.multipliedBy(this.allocationPercent()).div(100);
    }

    getAPY() {
        let interestRate;
        if (this.boot.poolInfo.totalSupply.comparedTo(0) === 0) {
            interestRate = new BigNumber(0);
        } else {
            interestRate = this.boot.poolInfo.volume.multipliedBy(this.boot.poolInfo.fee).multipliedBy(new BigNumber(1).minus(this.boot.poolInfo.adminFee)).div(this.boot.poolInfo.totalSupply);
        }
        return new BigNumber(1).plus(interestRate.div(365)).exponentiatedBy(356).minus(1).multipliedBy(100).toFormat(4, 1);
    }

    getRewardAPY(): Promise<BigNumber> {
        let BSTPrice = 0.003;// 0.03 usd / bst
        let denominator = new BigNumber(10).exponentiatedBy(18);
        return this.boot.poolContract.balanceOf(this.boot.proxyContract.address).then(lpStakingStr => {
            let totalLpStaking = new BigNumber(lpStakingStr.toString()).div(denominator);
            if (totalLpStaking.comparedTo(0) > 0) {
                return this.boot.web3.getBlockNumber().then(blockNumber => {
                    return this.boot.minterContract.startBlock().then(startBlockStr => {
                        let startBlock = new BigNumber(startBlockStr.toString());
                        if (new BigNumber(blockNumber).comparedTo(startBlock) > 0) {
                            let blocks = new BigNumber(blockNumber).minus(startBlock);
                            return this.boot.minterContract.tokenPerBlock().then(tpb => {
                                let tokenPerBlock = new BigNumber(tpb.toString()).div(denominator);
                                return this.boot.minterContract.phase().then(phase => {
                                    phase = Number(phase);
                                    tokenPerBlock = tokenPerBlock.div(new BigNumber('1189207115002721024').div(denominator).exponentiatedBy(phase));
                                    let pArr = new Array();
                                    pArr.push(this.boot.minterContract.proxyInfo(this.boot.proxyContract.address));
                                    pArr.push(this.boot.minterContract.totalAllocPoint());
                                    pArr.push(this.boot.proxyContract.poolInfo(this.boot.chainConfig.contracts.pid));
                                    pArr.push(this.boot.proxyContract.totalAllocPoint());
                                    return this.boot.tokenContract.balanceOf(this.boot.proxyContract.address).then(bstBalance => {
                                        let rewardAmt = new BigNumber(bstBalance.toString()).div(denominator);//.multipliedBy(percent);
                                        let interestRate = rewardAmt.multipliedBy(BSTPrice).div(totalLpStaking);
                                        return interestRate.div(365).plus(1).exponentiatedBy(365).minus(1);
                                    });
                                    // return Promise.all(pArr).then(arr => {
                                    // let percent = new BigNumber(arr[0].allocPoint.toString()).div(new BigNumber(arr[1].toString()));//.multipliedBy(arr[2].allocPoint.toString()).div(arr[3].toString());
                                    // let rewardAmt = blocks.multipliedBy(tokenPerBlock).multipliedBy(percent);
                                    // return this.boot.tokenContract.balanceOf(this.boot.proxyContract.address).then(bstBalance => {
                                    //     let rewardAmt = new BigNumber(bstBalance.toString()).div(denominator);//.multipliedBy(percent);
                                    //     let interestRate = rewardAmt.multipliedBy(BSTPrice).div(totalLpStaking);
                                    //     return interestRate.div(365).plus(1).exponentiatedBy(365).minus(1);
                                    // });
                                    // });
                                });
                            });
                        } else {
                            return new BigNumber(0);
                        }
                    });
                });
            } else {
                return new BigNumber(0);
            }
        });
    }
}
