import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNote } from './content-note';

describe('ContentNote', () => {
  let component: ContentNote;
  let fixture: ComponentFixture<ContentNote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentNote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentNote);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
