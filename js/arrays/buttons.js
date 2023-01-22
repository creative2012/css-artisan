const buttonsCSS = [
    {
        style:`{ID}{
            appearance: button;
            backface-visibility: hidden;
            background-color: #405cf5;
            border-radius: 6px;
            border-width: 0;
            box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
            box-sizing: border-box;
            color: #fff;
            cursor: pointer;
            font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
            font-size: 100%;
            height: 44px;
            line-height: 1.15;
            margin: 12px 0 0;
            outline: none;
            overflow: hidden;
            padding: 0 25px;
            position: relative;
            text-align: center;
            text-transform: none;
            transform: translateZ(0);
            transition: all .2s,box-shadow .08s ease-in;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            width: 100%;
            }
    
            {ID}:disabled {
            cursor: default;
            }
    
            {ID}:focus {
            box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
            } `,
        credit: "Stripe"

    },
    {
        style:`{ID} {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 6px 14px;
            font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
            border-radius: 6px;
            border: none;
          
            color: #fff;
            background: linear-gradient(180deg, #4B91F7 0%, #367AF6 100%);
             background-origin: border-box;
            box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
          }
          
          {ID}:focus {
            box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2), 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
            outline: 0;`,
        credit: "macOS Big Sur"

    }
    
]
