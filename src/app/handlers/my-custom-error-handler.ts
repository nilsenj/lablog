import {ErrorHandler, Injectable, Injector} from "@angular/core";
import {ActivatedRouteSnapshot, DetachedRouteHandle, Router, RouteReuseStrategy} from "@angular/router";

let hasRouterError: boolean = false;
@Injectable()
export class MyErrorHandler implements ErrorHandler {
    constructor(private inj: Injector) {}

    handleError(error: any): void {
        console.log('MyErrorHandler: ' + error);

        if(hasRouterError) {
            let router: Router = this.inj.get(Router);
            router.navigated = false;
        }

        //throw error; // it is necessarily otherwise handleError won't be executed during next error
    }
}
export class PreventErrorRouteReuseStrategy implements RouteReuseStrategy {
    shouldDetach(route: ActivatedRouteSnapshot): boolean { return false; }
    store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {}
    shouldAttach(route: ActivatedRouteSnapshot): boolean { return false; }
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle|null { return null; }
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        if(hasRouterError) {
            hasRouterError = false;
            return false;
        }
        return future.routeConfig === curr.routeConfig;
    }
}
export function MyRouterErrorHandler(error: any): Error {
    console.log("RouterErrorHandler: " + error);
    hasRouterError = true;
    throw error;
}