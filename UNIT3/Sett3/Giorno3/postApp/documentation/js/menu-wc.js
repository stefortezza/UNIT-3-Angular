'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">post-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-41e5c4a3e36aaccf43a36ec5ce508b0ce6e67d5e7b556a62fe4d82cf725c49ecb2870b197fa7541fd662aa3ca938d174e680a7678127579131b92a4b59138e5e"' : 'data-bs-target="#xs-components-links-module-AppModule-41e5c4a3e36aaccf43a36ec5ce508b0ce6e67d5e7b556a62fe4d82cf725c49ecb2870b197fa7541fd662aa3ca938d174e680a7678127579131b92a4b59138e5e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-41e5c4a3e36aaccf43a36ec5ce508b0ce6e67d5e7b556a62fe4d82cf725c49ecb2870b197fa7541fd662aa3ca938d174e680a7678127579131b92a4b59138e5e"' :
                                            'id="xs-components-links-module-AppModule-41e5c4a3e36aaccf43a36ec5ce508b0ce6e67d5e7b556a62fe4d82cf725c49ecb2870b197fa7541fd662aa3ca938d174e680a7678127579131b92a4b59138e5e"' }>
                                            <li class="link">
                                                <a href="components/ActivePostsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivePostsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InactivePostsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InactivePostsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewPostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewPostComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-AppModule-41e5c4a3e36aaccf43a36ec5ce508b0ce6e67d5e7b556a62fe4d82cf725c49ecb2870b197fa7541fd662aa3ca938d174e680a7678127579131b92a4b59138e5e"' : 'data-bs-target="#xs-directives-links-module-AppModule-41e5c4a3e36aaccf43a36ec5ce508b0ce6e67d5e7b556a62fe4d82cf725c49ecb2870b197fa7541fd662aa3ca938d174e680a7678127579131b92a4b59138e5e"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-41e5c4a3e36aaccf43a36ec5ce508b0ce6e67d5e7b556a62fe4d82cf725c49ecb2870b197fa7541fd662aa3ca938d174e680a7678127579131b92a4b59138e5e"' :
                                        'id="xs-directives-links-module-AppModule-41e5c4a3e36aaccf43a36ec5ce508b0ce6e67d5e7b556a62fe4d82cf725c49ecb2870b197fa7541fd662aa3ca938d174e680a7678127579131b92a4b59138e5e"' }>
                                        <li class="link">
                                            <a href="directives/HighlightDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HighlightDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-AppModule-41e5c4a3e36aaccf43a36ec5ce508b0ce6e67d5e7b556a62fe4d82cf725c49ecb2870b197fa7541fd662aa3ca938d174e680a7678127579131b92a4b59138e5e"' : 'data-bs-target="#xs-pipes-links-module-AppModule-41e5c4a3e36aaccf43a36ec5ce508b0ce6e67d5e7b556a62fe4d82cf725c49ecb2870b197fa7541fd662aa3ca938d174e680a7678127579131b92a4b59138e5e"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-41e5c4a3e36aaccf43a36ec5ce508b0ce6e67d5e7b556a62fe4d82cf725c49ecb2870b197fa7541fd662aa3ca938d174e680a7678127579131b92a4b59138e5e"' :
                                            'id="xs-pipes-links-module-AppModule-41e5c4a3e36aaccf43a36ec5ce508b0ce6e67d5e7b556a62fe4d82cf725c49ecb2870b197fa7541fd662aa3ca938d174e680a7678127579131b92a4b59138e5e"' }>
                                            <li class="link">
                                                <a href="pipes/EllipsisPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EllipsisPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/Error404Component.html" data-type="entity-link" >Error404Component</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostService.html" data-type="entity-link" >PostService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link" >TokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuthData.html" data-type="entity-link" >AuthData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Register.html" data-type="entity-link" >Register</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});