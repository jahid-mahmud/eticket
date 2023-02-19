import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { take } from 'rxjs/operators';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';

@Component({
    selector: 'language',
    templateUrl: './language.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'language'
})
export class LanguageComponent implements OnInit, OnDestroy {
    availableLangs: AvailableLangs;
    activeLang: string;
    flagCodes: any;

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseNavigationService: FuseNavigationService,
        private _translocoService: TranslocoService
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Get the available languages from transloco
        this.availableLangs = this._translocoService.getAvailableLangs();

        // Subscribe to language changes
        this._translocoService.langChanges$.subscribe((activeLang) => {

            // Get the active lang
            this.activeLang = activeLang;

            // Update the navigation
            this._updateNavigation(activeLang);
        });

        // Set the country iso codes for languages for flags
        this.flagCodes = {
            'en': 'us',
            'de':'de'
            // 'bn': 'bn',
        };
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Set the active lang
     *
     * @param lang
     */
    setActiveLang(lang: string): void {
        // Set the active lang
        this._translocoService.setActiveLang(lang);
        localStorage.setItem('lang',lang);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Update the navigation
     *
     * @param lang
     * @private
     */
    private _updateNavigation(lang: string): void {
        // For the demonstration purposes, we will only update the Dashboard names
        // from the navigation but you can do a full swap and change the entire
        // navigation data.
        //
        // You can import the data from a file or request it from your backend,
        // it's up to you.

        // Get the component -> navigation data -> item
        const navComponent = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>('mainNavigation');

        // Return if the navigation component does not exist
        if (!navComponent) {
            return null;
        }

        // Get the flat navigation data
        const navigation = navComponent.navigation;

        // Get the Project dashboard item and update its title
        const publicProjectItem = this._fuseNavigationService.getItem('public-project', navigation);
        if (publicProjectItem) {
            this._translocoService.selectTranslate('public-projects').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    publicProjectItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }

        const projectsItems = this._fuseNavigationService.getItem('my_projects', navigation);
        if (projectsItems) {
            this._translocoService.selectTranslate('my-projects').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    projectsItems.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }
        const projectsItemsSu = this._fuseNavigationService.getItem('project_management_superuser', navigation);
        if (projectsItemsSu) {
            this._translocoService.selectTranslate('project-management').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    projectsItemsSu.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }

        const sharesItems = this._fuseNavigationService.getItem('my_shares', navigation);
        if (sharesItems) {
            this._translocoService.selectTranslate('my-shares').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    sharesItems.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }
        const reportsSu = this._fuseNavigationService.getItem('reports_superuser', navigation);
        if (reportsSu) {
            this._translocoService.selectTranslate('reports').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    reportsSu.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }
        const settingsItems = this._fuseNavigationService.getItem('settings_superuser', navigation);
        if (settingsItems) {
            this._translocoService.selectTranslate('settings').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    settingsItems.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }
        const userManagementSu = this._fuseNavigationService.getItem('user_management_superuser', navigation);
        if (userManagementSu) {
            this._translocoService.selectTranslate('user-management').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    userManagementSu.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }
        // my_profile_superuser
        const myProfileSuperuser = this._fuseNavigationService.getItem('my_profile_superuser', navigation);
        if (myProfileSuperuser) {
            this._translocoService.selectTranslate('my-profile').pipe(take(1))
                .subscribe((translation) => {

                    // Set the title
                    myProfileSuperuser.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }

        // Get the Analytics dashboard item and update its title
        // const analyticsDashboardItem = this._fuseNavigationService.getItem('dashboards.analytics', navigation);
        // if (analyticsDashboardItem) {
        //     this._translocoService.selectTranslate('Analytics').pipe(take(1))
        //         .subscribe((translation) => {

        //             // Set the title
        //             analyticsDashboardItem.title = translation;

        //             // Refresh the navigation component
        //             navComponent.refresh();
        //         });
        // }
    }
}
