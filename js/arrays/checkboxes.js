const checkBoxes = [
    {
        style: `
        :root {
            --form-control-color: rebeccapurple;
            --form-control-disabled: #959495;
          }
          {ID} input[type="checkbox"] {
            /* Add if not using autoprefixer */
            -webkit-appearance: none;
            /* Remove most all native input styles */
            appearance: none;
            /* Not removed via appearance */
            margin: 0;
          
            font: inherit;
            color: currentColor;
            width: 30px;
            height: 30px;
            border: 0.15em solid currentColor;
            border-radius: 0.15em;
            transform: translateY(-0.075em);
          
            display: grid;
            place-content: center;
          }
        {ID} input[type="checkbox"]::before {
            content: "";
            width: 18px;
            height: 18px;
            clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
            transform: scale(0);
            transform-origin: bottom left;
            transition: 120ms transform ease-in-out;
            box-shadow: inset 1em 1em var(--form-control-color);
            /* Windows High Contrast Mode */
            background-color: CanvasText;
        }
        
        {ID} input[type="checkbox"]:checked::before {
            transform: scale(1);
        }
        
        {ID} input[type="checkbox"]:focus {
            outline:0;

        }
        {ID} input[type="checkbox"]:hover {
            cursor: pointer;

        }
        
        {ID} input[type="checkbox"]:disabled {
            --form-control-color: var(--form-control-disabled);
        
            color: var(--form-control-disabled);
            cursor: not-allowed;
        }`,
        credit: "Moderncss.dev"
    }

]