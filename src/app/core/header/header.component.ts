import {Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../shared/services/login.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

    @Output() toggle = new EventEmitter<void>();
    @Output() toggleDarkTheme = new EventEmitter<boolean>();

    constructor(public router: Router, public loginService: LoginService) {
    }

    ngOnInit() {
    }

    openSidebar() {
        this.toggle.emit();
    }

    onChange(checked: boolean) {
        this.toggleDarkTheme.emit(checked);
    }

    doLogout() {
        this.loginService.logout();
        this.router.navigateByUrl('home').catch(err => console.log(err));
    }

    onHomeClick() {
        this.router.navigate(['']).catch(err => console.log(err));
    }

    doLogin() {
        this.router.navigateByUrl('login').catch(err => console.log(err));
    }


}