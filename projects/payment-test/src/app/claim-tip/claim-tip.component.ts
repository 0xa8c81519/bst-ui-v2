import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BootService } from '../services/boot.service';

@Component({
	selector: 'app-claim-tip',
	templateUrl: './claim-tip.component.html',
	styleUrls: ['./claim-tip.component.less']
})
export class ClaimTipComponent implements OnInit {

	constructor(private dialogRef: MatDialogRef<ClaimTipComponent>, public boot: BootService) { }

	ngOnInit(): void {
	}
	continu() {
		this.dialogRef.close('ok');
	}
}
