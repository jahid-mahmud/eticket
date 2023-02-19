import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { statusCodes } from 'app/core/config/system.config';

@Component({
  selector: 'itsm-status',
  templateUrl: './itsm-status.component.html',
  styleUrls: ['./itsm-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItsmStatusComponent implements OnInit {

  @Input() text: string;
  @Input() value: number;

  constructor() { }

  ngOnInit() {
  }


}
