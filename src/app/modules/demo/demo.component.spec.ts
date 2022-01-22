import { DemoComponent } from './demo.component';

describe('DemoComponent', () => {
  let component: DemoComponent;

  beforeEach(() => {
    component = new DemoComponent();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
