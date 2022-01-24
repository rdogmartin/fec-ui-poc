import { DefaultComponent } from './default.component';

describe('DefaultComponent', () => {
  let component: DefaultComponent;

  beforeEach(() => {
    component = new DefaultComponent();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
