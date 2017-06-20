import { TestBed, async } from '@angular/core/testing';

import { HacDropdown } from './hac.dropdown';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HacDropdown
      ],
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(HacDropdown);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have selected 'one'`, async(() => {
    const fixture = TestBed.createComponent(HacDropdown);
    const app = <HacDropdown>fixture.debugElement.componentInstance;

    app.placeholder = 'test'
    app.selected = 1
    app.options = [{
      key: 1,
      value: 'one',
      label: 'one'
    }, {
      key: 2,
      value: 'two',
      label: 'two'
    }]

    expect(app.getSelected().value).toEqual('one');
  }));

  it(`should render 'one' label`, async(() => {
    const fixture = TestBed.createComponent(HacDropdown);
    const app = <HacDropdown>fixture.debugElement.componentInstance;

    app.placeholder = 'test'
    app.selected = 1
    app.options = [{
      key: 1,
      value: 'one',
      label: 'one'
    }, {
      key: 2,
      value: 'two',
      label: 'two'
    }]

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('.hac-dd-label').textContent).toContain('one');
  }));

  it('should show placeholder when empty', async(() => {
    const fixture = TestBed.createComponent(HacDropdown);
    const app = <HacDropdown>fixture.debugElement.componentInstance;

    app.placeholder = 'test'
    app.options = null

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('.hac-dd-label').textContent).toContain('test');
  }));
});
