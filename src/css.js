const string = `
.skin * {
margin: 0;
padding: 0;
box-sizing: border-box;
}
.skin *::after,
.skin *::before {
box-sizing: border-box;
}
.skin {
background: #ffe600;
min-height:50vh;
position: relative;
}
.nose {
border: 10px solid black;
border-color: black transparent transparent transparent;
width: 0;
height: 0;
position: relative;
left: 50%;
margin-left: -10px;
top: 150px;
z-index: 99;
}
@keyframes wave {
0% {
transform: rotate(0deg);
}
33% {
transform: rotate(5deg);
}
66% {
transform: rotate(-5deg);
}
100% {
transform: rotate(0deg);
}
}
.nose:hover {
transform-origin: center bottom;
animation: wave 0.2s infinite linear;
}
.yuan {
position: absolute;
width: 20px;
height: 6px;
border: 1px solid black;
background: black;
top: -16px;
left: -10px;
border-radius: 8px 8px 0 0;
}
/* 眼睛 */
.eye {
border: 2px solid #000;
background-color: #2e2e2e;
width: 64px;
height: 64px;
position: absolute;
left: 50%;
top: 100px;
margin-left: -32px;
border-radius: 50%;
}
.eye.left {
transform: translateX(-100px);
}
.eye.right {
transform: translateX(100px);
}
.eye::before {
display: block;
content: "";
border: 3px solid #000;
width: 30px;
height: 30px;
background-color: #fff;
border-radius: 50%;
position: relative;
left: 5px;
top: 2px;
}
.mouth {
width: 200px;
height: 200px;
position: absolute;
left: 50%;
top: 180px;
margin-left: -100px;
}
.mouth .up {
position: relative;
top: -20px;
z-index: 1;
}
.mouth .up .lip {
border: 4px solid #000;
height: 30px;
width: 80px;
position: relative;
position: absolute;
left: 50%;
background: #ffe600;
}
.mouth .up .lip.left {
border-radius: 0 0 0 50px;
border-top-color: transparent;
border-right-color: transparent;
/* 方案二 */
border-top: none;
border-right: none;
transform: rotate(-15deg) translateX(-53px);
margin-left: -30px;
/* 方案二 */
border-bottom-left-radius: 45px 30px;
}
/* .mouth .up .lip.left::after {
content: "";
display: block;
width: 7px;
height: 30px;
position: absolute;  
right: -6px;
bottom: 0;
background-color: #ffe600;
} */

.mouth .up .lip.right {
border-radius: 0 0 50px 0;
border-top-color: transparent;
border-left-color: transparent;
/* 方案二 */
border-top: none;
border-left: none;
transform: rotate(15deg) translateX(53px);
margin-left: -50px;
/* 方案二 */
border-bottom-right-radius: 45px 30px;
}
/* .mouth .up .lip.right::after {
content: "";
display: block;
width: 7px;
height: 30px;
position: absolute;
left: -6px;
bottom: 0;
background-color: #ffe600;
} */
.mouth .down {
height: 160px;
position: absolute;
top: 8px;
width: 100%;
overflow: hidden;
}
.mouth .down .yuan1 {
border: 3px solid #000;
width: 140px;
height: 1000px;
position: absolute;
bottom: 0;
left: 50%;
transform: translateX(-50%);
border-radius: 75px/300px;
background-color: #9b000a;
overflow: hidden;
}
.mouth .down .yuan1 > .yuan2 {
background-color: #ff485f;
width: 200px;
height: 300px;
position: absolute;
bottom: -170px;
left: 50%;
transform: translateX(-50%);
border-radius: 100px;
}
.face {
border: 3px solid #000;
width: 88px;
height: 88px;
position: absolute;
top: 200px;
left: 50%;
margin-left: -44px;
z-index: 4;
background-color: #ff0000;
border-radius: 50%;
}
.face.left {
transform: translateX(-180px);
}
.face.right {
transform: translateX(180px);
}

.face > img {
position: absolute;
top: 50%;
left: 50%;
}
.face > .shock-left {
transform: rotateY(180deg);
transform-origin: 0 0;
}`
export  default  string
