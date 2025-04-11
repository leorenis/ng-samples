/**
 * Angular class decorator to auto measure loading time
 *
 */
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
export function Measure() {
  return function (constructor: any) {
    const originalNgOnInit = constructor.prototype.ngOnInit;

    constructor.prototype.ngOnInit = function (...args: any[]) {
      const startTime = performance.now();

      // Call the original `ngOnInit`
      originalNgOnInit?.apply(this, args);

      // Wrap the subscription in timing logic
      if (this.$postSubscription) {
        const observable = this.uniqueService.getPostById();

        if (observable instanceof Observable) {
          const subStartTime = performance.now();

          observable.pipe(
            finalize(() => {
              const subEndTime = performance.now();
              console.log(`[MeasureTiming] Subscription completed in ${(subEndTime - subStartTime).toFixed(2)} ms`);
            })
          ).subscribe({
            next: (value) => {
              console.log('Data received:', value);
            },
            error: (err) => {
              console.error('[MeasureTiming] Error:', err);
            },
          });
        }
      }

      const endTime = performance.now();
      console.log(`[MeasureTiming] ngOnInit completed in ${(endTime - startTime).toFixed(2)} ms`);
    };
  };
}
