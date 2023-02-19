import { animate, style, transition, trigger } from "@angular/animations";

export const InOut = (height = 160) => {
    return (
        trigger(
            'InOut',
            [
                transition(
                    ':enter',
                    [
                        style({ height: 0, opacity: 0 }),
                        animate('0.3s ease-out',
                            style({ height: height, opacity: 1 }))
                    ]
                ),
                transition(
                    ':leave',
                    [
                        style({ height: height, opacity: 1 }),
                        animate('0.3s ease-in',
                            style({ height: 0, opacity: 0 }))
                    ]
                )
            ]
        )
    )
}
    
