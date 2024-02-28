import { Component } from "react";
import "./SideMenuStyles.css";
// import {Link} from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class SideMenu extends Component {
  //  state = {clicked:true};
  //  statee={cickedd:false};
  //  handleClick = () =>{
  //     this.setState({clicked: !this.state.clicked})
  //  }
  //  handleMenu = () =>{
  //     console.log('preseeeddddddddd');
  //     this.setState({clickedd: !this.statee.clickedd})
  //  }
  render() {
    return (
      <>
        <div id="sidemenu">
          <button id="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              width="30px"
              height="auto"
              preserveAspectRatio="xMidYMid meet"
              id="logoo"
            >
              <defs>
                <clipPath id="__lottie_element_33">
                  <rect width="96" height="96" x="0" y="0"></rect>
                </clipPath>
                <clipPath id="__lottie_element_35">
                  <path
                    fill="currentColor"
                    clip-rule="nonzero"
                    d=" M11.343000411987305,2.1010000705718994 C11.343000411987305,2.1010000705718994 3.6710000038146973,9.059000015258789 3.6710000038146973,9.059000015258789 C3.253000020980835,9.439000129699707 3.015000104904175,9.97700023651123 3.015000104904175,10.541000366210938 C3.015000104904175,10.541000366210938 3.015000104904175,19.990999221801758 3.015000104904175,19.990999221801758 C3.015000104904175,21.094999313354492 3.9100000858306885,21.990999221801758 5.014999866485596,21.990999221801758 C5.014999866485596,21.990999221801758 8.015999794006348,21.990999221801758 8.015999794006348,21.990999221801758 C8.567181587219238,21.990999221801758 9.015999794006348,21.543670654296875 9.015999794006348,20.992488861083984 C9.015999794006348,20.992488861083984 9.015999794006348,15.003378868103027 9.015999794006348,15.003378868103027 C9.015999794006348,14.726789474487305 9.240408897399902,14.504103660583496 9.515999794006348,14.504103660583496 C9.515999794006348,14.504103660583496 14.515999794006348,14.504103660583496 14.515999794006348,14.504103660583496 C14.791590690612793,14.504103660583496 15.015999794006348,14.726813316345215 15.015999794006348,15.003402709960938 C15.015999794006348,15.003402709960938 15.015999794006348,20.99250030517578 15.015999794006348,20.99250030517578 C15.015999794006348,21.543682098388672 15.463000297546387,21.990999221801758 16.016000747680664,21.990999221801758 C16.016000747680664,21.990999221801758 19.014999389648438,21.990999221801758 19.014999389648438,21.990999221801758 C20.118999481201172,21.990999221801758 21.014999389648438,21.094999313354492 21.014999389648438,19.990999221801758 C21.014999389648438,19.990999221801758 21.014999389648438,10.541000366210938 21.014999389648438,10.541000366210938 C21.014999389648438,9.97700023651123 20.775999069213867,9.439000129699707 20.358999252319336,9.059000015258789 C20.358999252319336,9.059000015258789 12.687000274658203,2.1010000705718994 12.687000274658203,2.1010000705718994 C12.305999755859375,1.7549999952316284 11.723999977111816,1.7549999952316284 11.343000411987305,2.1010000705718994"
                    fill-opacity="1"
                  ></path>
                </clipPath>
              </defs>
              <g clip-path="url(#__lottie_element_33)">
                <g
                  clip-path="url(#__lottie_element_35)"
                  transform="matrix(4,0,0,4,0,0)"
                  opacity="1"
                >
                  <path
                    fill="currentColor"
                    d=" M3.65,9.07 C3.65,9.07 11.33,2.11 11.33,2.11 C11.71,1.76 12.29,1.76 12.67,2.11 C12.67,2.11 20.34,9.07 20.34,9.07 C20.76,9.45 21,9.99 21,10.55 C21,10.55 21,20 21,20 C21,21.1 20.1,22 19,22 C19,22 5,22 5,22 C3.89,22 3,21.1 3,20 C3,20 3,10.55 3,10.55 C3,9.99 3.24,9.45 3.65,9.07z M12,12.09 C12,12.09 11.99,12.1 11.99,12.1 C11.99,12.1 11.99,12.11 11.99,12.11 C11.99,12.11 12.01,12.11 12.01,12.11 C12.01,12.11 12.01,12.1 12.01,12.1 C12.01,12.1 12,12.09 12,12.09z"
                  ></path>
                  <g
                    opacity="1"
                    transform="matrix(1,0,0,1,11.99899959564209,11.881999969482422)"
                  ></g>
                </g>
              </g>
            </svg>
          </button>

          <button id="button">
            <svg
              width="30px"
              height="auto"
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              role="presentation"
              xmlns="http://www.w3.org/2000/svg"
              id="logoo"
            >
              <g>
                <path
                  data-follow-fill="currentColor"
                  d="M4.75 4.5h7.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75ZM2 5.25A2.75 2.75 0 0 1 4.75 2.5h7.5A2.75 2.75 0 0 1 15 5.25v13.5a2.75 2.75 0 0 1-2.75 2.75h-7.5A2.75 2.75 0 0 1 2 18.75V5.25Zm20.8 2.853L21 7.064v9.872l1.8-1.04V8.104ZM19 5.91l-2-1.154v14.49l2-1.154V5.909Z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
          </button>

          <button id="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              width="30px"
              height="auto"
              preserveAspectRatio="xMidYMid meet"
              id="logoo"
            >
              <g clip-path="url(#__lottie_element_51)">
                <g transform="matrix(4,0,0,4,0,0)" opacity="1">
                  <g opacity="1" transform="matrix(1,0,0,1,11,12)">
                    <path
                      fill="currentColor"
                      
                      d="M9,-7 C9,-8.656999588012695 7.6570000648498535,-10 6,-10 C4.3429999351501465,-10 3,-8.656999588012695 3,-7 C3,-6.808000087738037 3.0179998874664307,-6.619999885559082 3.052999973297119,-6.438000202178955 C3.052999973297119,-6.438000202178955 -4.060999870300293,-2.2890000343322754 -4.060999870300293,-2.2890000343322754 C-4.584000110626221,-2.7320001125335693 -5.261000156402588,-3 -6,-3 C-7.6570000648498535,-3 -9,-1.656999945640564 -9,0 C-9,1.656999945640564 -7.6570000648498535,3 -6,3 C-5.261000156402588,3 -4.584000110626221,2.7320001125335693 -4.060999870300293,2.2890000343322754 C-4.060999870300293,2.2890000343322754 3.052999973297119,6.438000202178955 3.052999973297119,6.438000202178955 C3.0179998874664307,6.619999885559082 3,6.808000087738037 3,7 C3,8.656999588012695 4.3429999351501465,10 6,10 C7.6570000648498535,10 9,8.656999588012695 9,7 C9,5.3429999351501465 7.6570000648498535,4 6,4 C5.261000156402588,4 4.584000110626221,4.26800012588501 4.060999870300293,4.710999965667725 C4.060999870300293,4.710999965667725 -3.052000045776367,0.5619999766349792 -3.052000045776367,0.5619999766349792 C-3.0179998874664307,0.3799999952316284 -3,0.19200000166893005 -3,0 C-3,-0.19200000166893005 -3.0179998874664307,-0.3799999952316284 -3.052000045776367,-0.5619999766349792 C-3.052000045776367,-0.5619999766349792 4.060999870300293,-4.710999965667725 4.060999870300293,-4.710999965667725 C4.584000110626221,-4.26800012588501 5.261000156402588,-4 6,-4 C7.6570000648498535,-4 9,-5.3429999351501465 9,-7z M6.006260871887207,-7 C6.006260871887207,-6.996543884277344 6.003456115722656,-6.993739128112793 6,-6.993739128112793 C5.996543884277344,-6.993739128112793 5.993739128112793,-6.996543884277344 5.993739128112793,-7 C5.993739128112793,-7.003456115722656 5.996543884277344,-7.006260871887207 6,-7.006260871887207 C6.003456115722656,-7.006260871887207 6.006260871887207,-7.003456115722656 6.006260871887207,-7z M-6.024545192718506,0 C-6.024545192718506,-0.013437658548355103 -6.013437747955322,-0.02454521134495735 -6,-0.02454521134495735 C-5.986562252044678,-0.02454521134495735 -5.975454807281494,-0.013437658548355103 -5.975454807281494,0 C-5.975454807281494,0.013437658548355103 -5.986562252044678,0.02454521134495735 -6,0.02454521134495735 C-6.013437747955322,0.02454521134495735 -6.024545192718506,0.013437658548355103 -6.024545192718506,0z M6.006260871887207,7 C6.006260871887207,7.003456115722656 6.003456115722656,7.006260871887207 6,7.006260871887207 C5.996543884277344,7.006260871887207 5.993739128112793,7.003456115722656 5.993739128112793,7 C5.993739128112793,6.996543884277344 5.996543884277344,6.993739128112793 6,6.993739128112793 C6.003456115722656,6.993739128112793 6.006260871887207,6.996543884277344 6.006260871887207,7z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </button>

          <button id="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              width="30px"
              height="auto"
              preserveAspectRatio="xMidYMid meet"
              id="logoo"
            >
              
              <g clip-path="url(#__lottie_element_46)">
                <g
                  transform="matrix(4,0,0,4,0,0)"
                  opacity="1"
                  
                >
                  <g opacity="1" transform="matrix(1,0,0,1,12,12)">
                    <path
                      fill="currentColor"
                      
                      d=" M0,7.067872524261475 C3.903243064880371,7.067872524261475 7.067872524261475,3.903243064880371 7.067872524261475,0 C7.067872524261475,-3.903243064880371 3.903243064880371,-7.067872524261475 0,-7.067872524261475 C-3.903243064880371,-7.067872524261475 -7.067872524261475,-3.903243064880371 -7.067872524261475,0 C-7.067872524261475,3.903243064880371 -3.903243064880371,7.067872524261475 0,7.067872524261475z M0,10 C-5.5229997634887695,10 -10,5.5229997634887695 -10,0 C-10,-5.5229997634887695 -5.5229997634887695,-10 0,-10 C5.5229997634887695,-10 10,-5.5229997634887695 10,0 C10,5.5229997634887695 5.5229997634887695,10 0,10z"
                    ></path>
                  </g>
                  <g opacity="1" transform="matrix(1,0,0,1,13,11)">
                    <path
                      fill="currentColor"
                      
                      d=" M-3,-2.5 C-3,-2.7760000228881836 -2.7760000228881836,-3 -2.5,-3 C-2.5,-3 -1.5,-3 -1.5,-3 C-1.2239999771118164,-3 -1,-2.7760000228881836 -1,-2.5 C-1,-2.5 -1,1 -1,1 C-1,1 2.5,1 2.5,1 C2.7760000228881836,1 3,1.2239999771118164 3,1.5 C3,1.5 3,2.5 3,2.5 C3,2.7760000228881836 2.7760000228881836,3 2.5,3 C2.5,3 -2,3 -2,3 C-2.552000045776367,3 -3,2.552000045776367 -3,2 C-3,2 -3,-2.5 -3,-2.5z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </>
    );
  }
}

export default SideMenu;

// <div
//         role="menu"
//         class="lv-menu lv-menu-light lv-menu-vertical menu-item-container"
//       >
//         <div class="lv-menu-inner">
//           <div
//             tabindex="0"
//             role="menuitem"
//             class="lv-menu-item lv-menu-item-size-default workbench-menu-item active siderMenuMedia-menu"
//             id="siderMenuMedia"
//           >
//             <div class="menu-inner-box">
//               <svg
//                 width="1em"
//                 height="1em"
//                 viewBox="0 0 24 24"
//                 preserveAspectRatio="xMidYMid meet"
//                 fill="none"
//                 role="presentation"
//                 xmlns="http://www.w3.org/2000/svg"
//                 class=""
//               >
// <g>
//   <path
//     data-follow-fill="currentColor"
//     d="m7.358 12.696-1.91.354A3.001 3.001 0 0 0 6 19h3v2H6a5 5 0 0 1-.917-9.916 7 7 0 1 1 13.833 0A5.002 5.002 0 0 1 18 21h-3v-2h3a3 3 0 0 0 .552-5.95l-1.91-.354.298-1.92a5 5 0 1 0-9.88 0l.298 1.92Z"
//     fill="currentColor"
//   ></path>
//   <path
//     data-follow-fill="currentColor"
//     d="M15.854 16.146a.5.5 0 0 0 0-.707l-3.147-3.146a1 1 0 0 0-1.414 0l-3.147 3.146a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0L11 15.414V20.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-5.086l1.44 1.44a.5.5 0 0 0 .706 0l.708-.708Z"
//     fill="currentColor"
//   ></path>
// </g>
//               </svg>
//               <span class="workbench-menu-item-title">Media</span>
//             </div>
//             <div class="bg-box"></div>
//           </div>
// <div
//   tabindex="0"
//   role="menuitem"
//   class="lv-menu-item lv-menu-item-size-default workbench-menu-item siderTabTemplate-menu"
//   id="siderTabTemplate"
// >
//   <div class="menu-inner-box">
//     <svg
//       width="1em"
//       height="1em"
//       viewBox="0 0 24 24"
//       preserveAspectRatio="xMidYMid meet"
//       fill="none"
//       role="presentation"
//       xmlns="http://www.w3.org/2000/svg"
//       class=""
//     >
//       <g>
//         <path
//           data-follow-fill="currentColor"
//           d="M4.75 4.5h7.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75ZM2 5.25A2.75 2.75 0 0 1 4.75 2.5h7.5A2.75 2.75 0 0 1 15 5.25v13.5a2.75 2.75 0 0 1-2.75 2.75h-7.5A2.75 2.75 0 0 1 2 18.75V5.25Zm20.8 2.853L21 7.064v9.872l1.8-1.04V8.104ZM19 5.91l-2-1.154v14.49l2-1.154V5.909Z"
//           clip-rule="evenodd"
//           fill-rule="evenodd"
//           fill="currentColor"
//         ></path>
//       </g>
//     </svg>
//     <span class="workbench-menu-item-title">Templates</span>
//   </div>
//   <div class="bg-box"></div>
// </div>
// <div
//   tabindex="0"
//   role="menuitem"
//   class="lv-menu-item lv-menu-item-size-default workbench-menu-item siderMenuElement-menu"
//   id="siderMenuElement"
// >
//   <div class="menu-inner-box">
//     <span class="lv-badge" style="line-height: 0;">
//       <svg
//         width="1em"
//         height="1em"
//         viewBox="0 0 24 24"
//         preserveAspectRatio="xMidYMid meet"
//         fill="none"
//         role="presentation"
//         xmlns="http://www.w3.org/2000/svg"
//         class="menu-inner-box-icon"
//       >
//         <g>
//           <path
//             data-follow-fill="currentColor"
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//             d="M16.5 11.25a.5.5 0 0 1-.5-.5V8h-2.75a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H16V3.25a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V6h2.75a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H18v2.75a.5.5 0 0 1-.5.5h-1ZM5 5h4v4H5V5ZM3 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm14 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Zm-4.25-2.25a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0Zm-7.268-1.686a.722.722 0 0 0-1.02 1.021L7 18.625l1.021-1.022-.002-.002 1.52-1.52a.722.722 0 0 0-1.021-1.02l-1.52 1.52-1.516-1.517Zm2.226 5.682a1 1 0 0 1-1.415 0l-3.246-3.247a2.722 2.722 0 1 1 3.85-3.849l.101.102.106-.106a2.723 2.723 0 0 1 3.849 3.85l-.106.105.003.002-3.142 3.143Z"
//             fill="currentColor"
//           ></path>
//         </g>
//       </svg>
//       <span
//         class="lv-badge-dot badge-zoom-appear-done badge-zoom-enter-done"
//         style="margin-right: -4px; margin-top: -2px;"
//       ></span>
//     </span>
//     <span class="workbench-menu-item-title">Elements</span>
//   </div>
//   <div class="bg-box"></div>
// </div>
//   <div
//     tabindex="0"
//     role="menuitem"
//     class="lv-menu-item lv-menu-item-size-default workbench-menu-item siderMenuAudio-menu"
//     id="siderMenuAudio"
//   >
//     <div class="menu-inner-box">
//       <svg
//         width="1em"
//         height="1em"
//         viewBox="0 0 24 24"
//         preserveAspectRatio="xMidYMid meet"
//         fill="none"
//         role="presentation"
//         xmlns="http://www.w3.org/2000/svg"
//         class=""
//       >
//         <g>
//           <path
//             data-follow-fill="currentColor"
//             d="M18.445 2.737A2 2 0 0 1 21 4.66v11.093a4.5 4.5 0 1 1-2-3.742V5l-9 2.68v10.072a4.5 4.5 0 1 1-2-3.742V7.256a2 2 0 0 1 1.445-1.922l9-2.597ZM19 15.752a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-13.5 4.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
//             clip-rule="evenodd"
//             fill-rule="evenodd"
//             fill="currentColor"
//           ></path>
//         </g>
//       </svg>
//       <span class="workbench-menu-item-title">Audio</span>
//     </div>
//     <div class="bg-box"></div>
//   </div>
//   <div
//     tabindex="0"
//     role="menuitem"
//     class="lv-menu-item lv-menu-item-size-default workbench-menu-item siderMenuText-menu"
//     id="siderMenuText"
//   >
//     <div class="menu-inner-box">
//       <svg
//         width="1em"
//         height="1em"
//         viewBox="0 0 24 24"
//         preserveAspectRatio="xMidYMid meet"
//         fill="none"
//         role="presentation"
//         xmlns="http://www.w3.org/2000/svg"
//         class=""
//       >
//         <g>
//           <path
//             data-follow-fill="currentColor"
//             d="M11 5H6a1 1 0 0 0-1 1v1.5H3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v1.5h-2V6a1 1 0 0 0-1-1h-5v14h2.246l-.536 2H9.292l-.536-2H11V5Z"
//             clip-rule="evenodd"
//             fill-rule="evenodd"
//             fill="currentColor"
//           ></path>
//         </g>
//       </svg>
//       <span class="workbench-menu-item-title">Text</span>
//     </div>
//     <div class="bg-box"></div>
//   </div>
//   <div
//     tabindex="0"
//     role="menuitem"
//     class="lv-menu-item lv-menu-item-size-default workbench-menu-item siderMenuCaption-menu"
//     id="siderMenuCaption"
//   >
//     <div class="menu-inner-box">
//       <svg
//         width="1em"
//         height="1em"
//         viewBox="0 0 24 24"
//         preserveAspectRatio="xMidYMid meet"
//         fill="none"
//         role="presentation"
//         xmlns="http://www.w3.org/2000/svg"
//         class=""
//       >
//         <g>
//           <path
//             data-follow-fill="currentColor"
//             d="M16.5 12a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1Zm-10 4a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1Zm8-4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h8Zm-5 4a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-8Z"
//             fill="currentColor"
//           ></path>
//           <path
//             data-follow-fill="currentColor"
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//             d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm3-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
//             fill="currentColor"
//           ></path>
//         </g>
//       </svg>
//       <span class="workbench-menu-item-title">Captions</span>
//     </div>
//     <div class="bg-box"></div>
//   </div>
//   <div
//     tabindex="0"
//     role="menuitem"
//     class="lv-menu-item lv-menu-item-size-default workbench-menu-item siderMenuTextEditMedia-menu"
//     id="siderMenuTextEditMedia"
//   >
//     <div class="menu-inner-box">
//       <svg
//         width="1em"
//         height="1em"
//         viewBox="0 0 24 24"
//         preserveAspectRatio="xMidYMid meet"
//         fill="none"
//         role="presentation"
//         xmlns="http://www.w3.org/2000/svg"
//         class=""
//       >
//         <g>
//           <path
//             data-follow-fill="currentColor"
//             d="M3.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-17Zm0 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5.522a6.533 6.533 0 0 1 2.012-2H3.5Zm0 7h4.674c.17.72.46 1.395.848 2H3.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm9.322-1.857a1.321 1.321 0 1 1 0 2.643 1.321 1.321 0 0 1 0-2.643Zm0-1.5c.348 0 .681.063.989.178l1.769-2.107L12.463 9h2.06l2.066 2.512L18.7 9h2.099l-3.169 3.776 1.693 2.058a2.821 2.821 0 1 1-1.207.902l-1.484-1.77-1.535 1.829a2.821 2.821 0 1 1-2.275-1.152Zm7.523 1.5a1.321 1.321 0 1 1 0 2.643 1.321 1.321 0 0 1 0-2.643Z"
//             clip-rule="evenodd"
//             fill-rule="evenodd"
//             fill="currentColor"
//           ></path>
//         </g>
//       </svg>
//       <span class="workbench-menu-item-title">Transcript</span>
//     </div>
//     <div class="bg-box"></div>
//   </div>
//   <div
//     tabindex="0"
//     role="menuitem"
//     class="lv-menu-item lv-menu-item-size-default workbench-menu-item siderMenuEffect-menu"
//     id="siderMenuEffect"
//   >
//     <div class="menu-inner-box">
//       <svg
//         width="1em"
//         height="1em"
//         viewBox="0 0 24 24"
//         preserveAspectRatio="xMidYMid meet"
//         fill="none"
//         role="presentation"
//         xmlns="http://www.w3.org/2000/svg"
//         class=""
//       >
//         <g>
//           <path
//             data-follow-fill="currentColor"
//             d="M3.623 4.364c-.32-.813.484-1.618 1.298-1.297l5.287 2.086c.09.035.19.02.266-.039l4.37-3.43a1 1 0 0 1 1.617.805l-.103 5.743a.27.27 0 0 0 .119.229l4.821 3.262c.715.484.523 1.585-.314 1.798l-4.49 1.144L22.827 21H20l-4.837-4.837-1.086 4.265c-.213.836-1.314 1.028-1.797.314L9.017 15.92a.27.27 0 0 0-.228-.118l-5.743.102a1 1 0 0 1-.805-1.617l3.43-4.37a.27.27 0 0 0 .038-.265L3.623 4.364ZM7.57 8.918 6.329 5.773l3.145 1.24c.75.296 1.6.172 2.235-.326l2.714-2.13-.065 3.64a2.27 2.27 0 0 0 .998 1.92l2.977 2.015-3.192.813a2.27 2.27 0 0 0-1.64 1.64l-.813 3.192-2.015-2.978a2.27 2.27 0 0 0-1.92-.997l-3.64.065 2.13-2.715a2.27 2.27 0 0 0 .327-2.234Z"
//             clip-rule="evenodd"
//             fill-rule="evenodd"
//             fill="currentColor"
//           ></path>
//         </g>
//       </svg>
//       <span class="workbench-menu-item-title">Effects</span>
//     </div>
//     <div class="bg-box"></div>
//   </div>
//   <div
//     tabindex="0"
//     role="menuitem"
//     class="lv-menu-item lv-menu-item-size-default workbench-menu-item siderMenuTransition-menu"
//   >
//     <div class="menu-inner-box">
//       <svg
//         width="1em"
//         height="1em"
//         viewBox="0 0 24 24"
//         preserveAspectRatio="xMidYMid meet"
//         fill="none"
//         role="presentation"
//         xmlns="http://www.w3.org/2000/svg"
//         class=""
//       >
//         <g>
//           <path
//             data-follow-fill="currentColor"
//             d="M3 5.304c0-1.372 1.659-2.06 2.629-1.09l4.954 4.955-1.414 1.414L5 6.414v11.172L10.586 12l-.003-.003 1.414-1.414.003.003 6.371-6.371c.97-.97 2.629-.283 2.629 1.089v13.392c0 1.372-1.659 2.06-2.629 1.09l-4.95-4.951 1.414-1.415L19 17.587V6.414L13.414 12l.007.006-1.415 1.415-.006-.007-6.371 6.371c-.97.97-2.629.283-2.629-1.089V5.304Z"
//             fill="currentColor"
//           ></path>
//         </g>
//       </svg>
//       <span class="workbench-menu-item-title">Transitions</span>
//     </div>
//     <div class="bg-box"></div>
//   </div>
//   <div
//     tabindex="0"
//     role="menuitem"
//     class="lv-menu-item lv-menu-item-size-default workbench-menu-item siderMenuFilter-menu"
//     id="siderMenuFilter"
//   >
//     <div class="menu-inner-box">
//       <svg
//         width="1em"
//         height="1em"
//         viewBox="0 0 24 24"
//         preserveAspectRatio="xMidYMid meet"
//         fill="none"
//         role="presentation"
//         xmlns="http://www.w3.org/2000/svg"
//         class=""
//       >
//         <g>
//           <path
//             data-follow-fill="currentColor"
//             d="M17.58 10.21a6 6 0 1 0-11.16 0A6 6 0 1 0 12 20.472a6 6 0 1 0 5.58-10.262Zm-6.03 1.765a4 4 0 1 1 3.9-1.95 5.985 5.985 0 0 0-3.9 1.95Zm-4 .05a4 4 0 1 0 3.887 1.928l-.01.02a5.986 5.986 0 0 1-3.877-1.948ZM12 13Zm8 3a4 4 0 0 1-6.75 2.906A5.97 5.97 0 0 0 14 16a5.973 5.973 0 0 0-.75-2.906A4 4 0 0 1 20 16Z"
//             clip-rule="evenodd"
//             fill-rule="evenodd"
//             fill="currentColor"
//           ></path>
//         </g>
//       </svg>
//       <span class="workbench-menu-item-title">Filters</span>
//     </div>
//     <div class="bg-box"></div>
//   </div>
//   <div class="sider-menu-divider"></div>
//   <div
//     tabindex="0"
//     role="menuitem"
//     class="lv-menu-item lv-menu-item-size-default workbench-menu-item siderMenuPlugin-menu"
//     id="Plugin"
//   >
//     <div class="menu-inner-box">
//       <svg
//         width="1em"
//         height="1em"
//         viewBox="0 0 24 24"
//         preserveAspectRatio="xMidYMid meet"
//         fill="none"
//         role="presentation"
//         xmlns="http://www.w3.org/2000/svg"
//         class=""
//       >
//         <g>
//           <path
//             data-follow-fill="currentColor"
//             d="M3 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm2 0h4v4H5V5ZM3 15a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4Zm2 0h4v4H5v-4ZM15 3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4Zm4 2h-4v4h4V5Zm-6 10a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4Zm2 0h4v4h-4v-4Z"
//             clip-rule="evenodd"
//             fill-rule="evenodd"
//             fill="currentColor"
//           ></path>
//         </g>
//       </svg>
//       <span class="workbench-menu-item-title">Plugins</span>
//     </div>
//     <div class="bg-box"></div>
//   </div>
// </div>
//       </div>
