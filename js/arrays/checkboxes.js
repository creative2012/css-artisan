const checkBoxes = [
    {
        html: `
        <input type="checkbox" id="switch22" /><label for="switch22">Toggle</label>`,
        style: `
        {ID} input[type=checkbox]{
            height: 0;
            width: 0;
            visibility: hidden;
        }
        
        {ID} label {
            cursor: pointer;
            text-indent: -9999px;
            width: 50px;
            height: 30px;
            background: grey;
            display: block;
            border-radius: 50px;
            position: relative;
        }
        
        {ID} label:after {
            content: '';
            position: absolute;
            top: 5px;
            left: 5px;
            width: 20px;
            height: 20px;
            background: #fff;
            border-radius: 40px;
            transition: 0.3s;
        }
        
        {ID} input:checked + label {
            background: #bada55;
        }
        
        {ID} input:checked + label:after {
            left: calc(100% - 5px);
            transform: translateX(-100%);
        }
        
        {ID} label:active:after {
            width: 30px;
        }
        `,
        credit: "Markus Burnette"
    },
    {
        html: `
        <div class="container">
            <div class="checkboxes">
            <div class="check">
                <input id="check" type="checkbox"/>
                <label id="label1" for="check">
                <div class="box"><i class="fa fa-check"></i></div>
                </label>
            </div>
            </div>
        </div>`,
        style: `
        /* Custom Code Here */
        {ID} .container {
        max-width: 400px;
        color:white;
        }
        {ID} .container .checkboxes {
        display: flex;
        justify-content: center;
        
        }
        {ID} .container .checkboxes + p {
        text-align: center;
        }
        {ID} .container .check input {
        display: none;
        }
        {ID} .container .check input:checked + #label1 .box {
        -webkit-animation: animOnTransform 1s 1 forwards;
                animation: animOnTransform 1s 1 forwards;
        background: rgba(0, 0, 0, 0.5);
        }
        {ID} .container .check input:checked +  #label1 .box i {
        transform: translate(-50%, -50%) scale(1);
        transition-duration: 200ms;
        transition-delay: 400ms;
        opacity: 1;
        }
        {ID} .container .check #label1 {
        min-width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        min-height: 60px;
        cursor: pointer;
        }
        {ID} .container .check #label1 .box {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        position: relative;
        width: 50px;
        height: 50px;
        transition: background 300ms ease;
        }
        {ID} .container .check #label1 .box:hover {
        background: rgba(0, 0, 0, 0.5);
        }
        {ID} .container .check #label1 .box i {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 20px;
        display: inline-block;
        opacity: 0;
        pointer-events: none;
        transition: all 0.2s ease-in-out;
        transition-delay: 200ms;
        transform: translate(-50%, -50%) scale(4);
        }

        @-webkit-keyframes animOn {
        40% {
            height: 20px;
            width: 100px;
        }
        50% {
            height: 60px;
            width: 30px;
        }
        60% {
            height: 40px;
            width: 70px;
        }
        70% {
            height: 55px;
            width: 45px;
        }
        100% {
            height: 50px;
            width: 50px;
        }
        }
        @-webkit-keyframes animOnTransform {
        40% {
            transform: scale(1.5, 0.5);
        }
        50% {
            transform: scale(0.5, 1.5);
        }
        60% {
            transform: scale(1.3, 0.6);
        }
        70% {
            transform: scale(0.8, 1.2);
        }
        100% {
            transform: scale(1, 1);
        }
        }
        /* end of custom code */
        `,
        credit: "Branko Stancevic"
    },
    {
        html: `<input type="checkbox"  name="checkbox" checked/>`,
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
    },
    {
        html: `
        <div class="center">
  <input id="switch" type="checkbox"/>
  <div class="wrap">
    <label for="switch"><span class="rib"></span><span class="rib"></span><span class="rib"></span></label>
  </div>
  </div>`,
        style: `
        
           #switch {
            outline: none;
            display: block;
            -webkit-appearance: none;
               -moz-appearance: none;
                    appearance: none;
            position: relative;
            width: 6rem;
            height: 2rem;
            background: #2e426b;
            border-radius: 2rem;
            appearance: none;
            filter: blur(0.4px);
       
            box-shadow: -0.05rem -0.05rem 0.08rem rgba(0, 0, 51, 0.6), 0.05rem 0.05rem 0.1rem #b6fbe4, inset 0.5rem 0.5rem 2rem rgba(0, 0, 51, 0.5), inset 0.1rem 0.1rem 0.2rem rgba(0, 0, 51, 0.75), inset -0.5rem -0.5rem 4rem rgba(182, 251, 228, 0.5);
          }
          
          #switch .wrap {
            display: block;
            position: relative;
            width: 6rem;
            height: 2rem;
            border-radius: 2rem;
            overflow: hidden;
            z-index: 1;
            transform: translatey(-100%);
         
          }
          
          .wrap label {
            cursor: pointer;
            display: block;
            position: absolute;
            top: 50%;
            left: 0.3rem;
            width: 4rem;
            height: 1.8rem;
            background: #abbaba;
            border-radius: 2rem;
            transform: translate3d(0%, -50%, 0);
            transition: transform 150ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
            filter: blur(0.4px);
            box-shadow: inset -0.05rem -0.05rem 0.08rem rgba(0, 0, 51, 0.6), inset 0.05rem 0.05rem 0.1rem #b6fbe4, 0.5rem 0.5rem 2rem rgba(0, 0, 51, 0.5), 0.1rem 0.1rem 0.2rem rgba(0, 0, 51, 0.75);
          }
          
          #switch:checked + div label {
            transform: translate3d(1.85rem, -50%, 0);
          }
          
          .rib {
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0.35rem;
            height: 1.2rem;
            border-radius: 1rem;
            background: #abbaba;
            opacity: 1;
            transform: translate3d(-50%, -50%, 0);
            box-shadow: inset -0.02rem -0.03rem 0.08rem rgba(0, 0, 51, 0.5), inset 0.03rem 0.03rem 0.1rem #b6fbe4, inset -0.02rem -0.03rem 0.2rem rgba(0, 0, 51, 0.3), inset 0.03rem 0.03rem 0.2rem rgba(182, 251, 228, 0.8), 0.05rem 0.08rem 0.3rem rgba(0, 0, 51, 0.3), -0.05rem -0.08rem 0.4rem rgba(182, 251, 228, 0.3), 0rem 0rem 0.2rem rgba(46, 66, 107, 0.2);
          }
          .rib:nth-child(1) {
            left: 35%;
          }
          .rib:nth-child(3) {
            left: 65%;
          }
          
          .center {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
          }
        `,
        credit: "Nathan Taylor"
    },
    {
        html: `
        <form>
      <div>
        <input type="checkbox" id="check2" name="check2" value="" />
        <label for="check2">
          <span><!-- This span is needed to create the "checkbox" element --></span>Checkbox
        </label>
      </div>
    </form>`,
        style: `

        {ID} form div label {
            display: inline-block;
            color: black;
            cursor: pointer;
            position: relative;
          }
          {ID} form div label span {
            display: inline-block;
            position: relative;
            background-color: transparent;
            width: 25px;
            height: 25px;
            transform-origin: center;
            border: 2px solid black;
            border-radius: 50%;
            vertical-align: -6px;
            margin-right: 10px;
            transition: background-color 150ms 200ms, transform 350ms cubic-bezier(0.78, -1.22, 0.17, 1.89);
          }
          {ID} form div label span:before {
            content: "";
            width: 0px;
            height: 2px;
            border-radius: 2px;
            background: black;
            position: absolute;
            transform: rotate(45deg);
            top: 13px;
            left: 9px;
            transition: width 50ms ease 50ms;
            transform-origin: 0% 0%;
          }
          {ID} form div label span:after {
            content: "";
            width: 0;
            height: 2px;
            border-radius: 2px;
            background: black;
            position: absolute;
            transform: rotate(305deg);
            top: 16px;
            left: 10px;
            transition: width 50ms ease;
            transform-origin: 0% 0%;
          }
          {ID} form div label:hover span:before {
            width: 5px;
            transition: width 100ms ease;
          }
          {ID} form div label:hover span:after {
            width: 10px;
            transition: width 150ms ease 100ms;
          }
          
          {ID} input[type=checkbox] {
            display: none;
          }
          {ID} input[type=checkbox]:checked + label span {
            background-color: black;
            transform: scale(1.25);
          }
          {ID} input[type=checkbox]:checked +  label span:after {
            width: 10px;
            background: white;
            transition: width 150ms ease 100ms;
          }
          {ID} input[type=checkbox]:checked + label span:before {
            width: 5px;
            background: white;
            transition: width 150ms ease 100ms;
          }
          {ID} input[type=checkbox]:checked +  label:hover span {
            background-color: black;
            transform: scale(1.25);
          }
          {ID} input[type=checkbox]:checked +  label:hover span:after {
            width: 10px;
            background: white;
            transition: width 150ms ease 100ms;
          }
          {ID} input[type=checkbox]:checked +  label:hover span:before {
            width: 5px;
            background: white;
            transition: width 150ms ease 100ms;
          }
        
          
        `,
        credit: "Pawel Durczok"
    }

]