import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;

  beforeEach(() => {
    component = new MainComponent();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
