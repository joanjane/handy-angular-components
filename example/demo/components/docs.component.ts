import { Component } from '@angular/core';

@Component({
  selector: 'hac-docs',
  templateUrl: './docs.component.html'
})
export class DocsComponent {

  usingBootstrap3(): boolean {
    return document.querySelectorAll('.bootstrap-3-dep').length !== 0;
  }

  usingBootstrap4(): boolean {
    return document.querySelectorAll('.bootstrap-4-dep').length !== 0;
  }

  useBootstrap3() {
    this.removeBootstrapDeps();
    this.addCss('//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
    'bootstrap-dep bootstrap-3-dep');
  }

  useBootstrap4() {
    this.removeBootstrapDeps();
    this.addCss('//stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css',
      'bootstrap-dep bootstrap-4-dep');
  }

  private removeBootstrapDeps() {
    const bootstrapDeps = document.querySelectorAll('.bootstrap-dep');
    for (let i = 0; i < bootstrapDeps.length; ++i) {
      bootstrapDeps[i].parentElement.removeChild(bootstrapDeps[i]);
    }
  }

  private addCss(link: string, className: string) {
    const cssElem = document.createElement('link');
    cssElem.href = link;
    cssElem.type = 'text/css';
    cssElem.className = className;
    cssElem.rel = 'stylesheet';
    document.head.insertBefore(cssElem, document.getElementById('bootstrap-dep-mark'));
  }
}