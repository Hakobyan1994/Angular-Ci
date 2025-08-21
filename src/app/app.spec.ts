import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { RouterTestingModule } from '@angular/router/testing';

describe('App', () => {
  beforeEach(async () => {
    // Template nur im Test überschreiben:
    // funktioniert mit title() (Signal) ODER title (String)
    TestBed.overrideComponent(App, {
      set: { template: '<h1>Hello, {{ title?.() || title }}</h1>' },
    });

    await TestBed.configureTestingModule({
      imports: [App, RouterTestingModule], // falls App RouterOutlet o.ä. nutzt
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-test');
  });
});
