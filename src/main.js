import { of } from 'rxjs';
import { map } from 'rxjs/operators';

of(1, 2, 3).pipe(map(x => {
    console.log(x);
    return x + '!!!';
})).subscribe(); // etc
