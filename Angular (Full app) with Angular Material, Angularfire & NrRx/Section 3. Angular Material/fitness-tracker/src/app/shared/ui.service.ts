import { Subject } from 'rxjs';
export class UIService {
    loadingStateChaged = new Subject<boolean>();
}