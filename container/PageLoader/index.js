const PageLoader = () => (
  <>
    <div className="preloader ">
      <div className="loader" />
    </div>
    <style jsx>
      {`
        .preloader {
          -webkit-transition: 0.1s all ease;
          -o-transition: 0.1s all ease;
          transition: 0.1s all ease;
          -webkit-transition-delay: 0.5s;
          -o-transition-delay: 0.5s;
          transition-delay: 0.5s;
          background-color: #222;
          position: fixed;
          z-index: 999;
          height: 100vh;
          width: 100vw;
           {
            /* @apply fixed z-50 h-full w-full; */
          }
        }
        .preloader.loaded {
          visibility: hidden;
          opacity: 0;
           {
            /* @apply opacity-0; */
          }
        }
        .preloader:before,
        .preloader:after {
          content: '';
          -webkit-transition: 0.5s all ease;
          -o-transition: 0.5s all ease;
          transition: 0.5s all ease;
          position: absolute;
          height: 50%;
          width: 100%;
          background-color: #222;
           {
            /* @apply absolute h-1/2 w-full bg-[#222]; */
          }
        }
        .preloader:before {
          top: 0;
          left: 0;
           {
            /* @apply top-0 left-0; */
          }
        }
        .preloader:after {
          bottom: 0;
          left: 0;
           {
            /* @apply bottom-0 left-0; */
          }
        }
        .preloader.loaded:before,
        .preloader.loaded:after {
          height: 0;
           {
            /* @apply h-0; */
          }
        }
        .preloader .loader {
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          -webkit-transition: 0.2s all ease;
          -o-transition: 0.2s all ease;
          transition: 0.2s all ease;
          -webkit-animation: 1s infinite ease-in-out;
          animation: 1s infinite ease-in-out;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          position: fixed;
          top: 50%;
          left: 50%;
          z-index: 10;
          background-color: #fff;
           {
            /* @apply w-[50px] h-[50px] rounded-[50%] fixed top-1/2 left-1/2 z-10 bg-[#fff]; */
          }
        }
        .preloader .loader:before,
        .preloader .loader:after {
          -webkit-animation: 0.8s infinite ease-in-out;
          animation: 0.8s infinite ease-in-out;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 0;
           {
            /* @apply w-full h-full rounded-[50%] absolute top-0 left-0; */
          }
        }
        .preloader .loader:before {
          content: '';
          -webkit-box-sizing: content-box;
          box-sizing: content-box;
          -webkit-animation-name: anim-loader;
          animation-name: anim-loader;
          border: 10px solid #222;
          top: -10px;
          left: -10px;
           {
            /* @apply border-[10px] border-solid border-[#222] top-[-10px] left-[-10px]; */
          }
        }
        .preloader.loaded .loader {
          opacity: 0;
           {
            /* @apply opacity-0; */
          }
        }
        @-webkit-keyframes anim-loader {
          0% {
            -webkit-transform: scale(0);
            transform: scale(0);
          }
          100% {
            -webkit-transform: scale(1);
            transform: scale(1);
          }
        }
        @keyframes anim-loader {
          0% {
            -webkit-transform: scale(0);
            transform: scale(0);
          }
          100% {
            -webkit-transform: scale(1);
            transform: scale(1);
          }
        }
      `}
    </style>
  </>
);
export default PageLoader;
