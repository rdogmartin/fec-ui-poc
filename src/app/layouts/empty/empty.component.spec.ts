import { EmptyComponent } from './empty.component';

describe('EmptyComponent', () => {
  let component: EmptyComponent;

  beforeEach(() => {
    component = new EmptyComponent();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
