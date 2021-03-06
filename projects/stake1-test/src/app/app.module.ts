import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppLibModule } from 'app-lib';
import { AppComponent } from './app.component';
import { ChooseWalletDlgComponent } from './choose-wallet-dlg/choose-wallet-dlg.component';
import { InstallWalletDlgComponent } from './intall-wallet-dlg/install-wallet-dlg.component';
import { PoolInfoComponent } from './pool-info/pool-info.component';
import { UnsupportedNetworkComponent } from './unsupported-network/unsupported-network.component';
import { PriceDiffComponent } from './price-diff/price-diff.component';
import { ApproveDlgComponent } from './approve-dlg/approve-dlg.component';
import { WalletExceptionDlgComponent } from './wallet-exception-dlg/wallet-exception-dlg.component';
import { MatIconModule } from '@angular/material/icon';
import { UserInfoComponent } from './user-info/user-info.component';
import { RewardInfoComponent } from './reward-info/reward-info.component';
import { WalletItemComponent } from './wallet-item/wallet-item.component';
import { StakeCompComponent } from './stake-comp/stake-comp.component';

@NgModule({
    declarations: [
        AppComponent,
        PoolInfoComponent,
        InstallWalletDlgComponent,
        UnsupportedNetworkComponent,
        ChooseWalletDlgComponent,
        PriceDiffComponent,
        ApproveDlgComponent,
        WalletExceptionDlgComponent,
        UserInfoComponent,
        RewardInfoComponent,
        WalletItemComponent,
        StakeCompComponent,
    ],
    imports: [
        BrowserModule,
        AppLibModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        FormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateModule,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}