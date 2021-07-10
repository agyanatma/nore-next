import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={200}
            height={200}
            viewBox="0 0 200 200"
            {...props}
        >
            <path d="M151.829 172.369h-43.523c-6.928 0-12.564-5.637-12.564-12.565v-18.292h3v18.292c0 5.274 4.291 9.565 9.564 9.565h43.523c5.275 0 9.566-4.291 9.566-9.565V67.592a9.49 9.49 0 00-2.879-6.84l2.098-2.146a12.471 12.471 0 013.781 8.985v92.211c.001 6.93-5.637 12.567-12.566 12.567zM98.741 99.71h-3V67.592c0-6.929 5.637-12.566 12.564-12.566h43.523v3h-43.523c-5.273 0-9.564 4.291-9.564 9.566V99.71z" />
            <path d="M130.067 168.142a6.988 6.988 0 01-6.98-6.98c0-3.851 3.132-6.982 6.98-6.982a6.99 6.99 0 016.982 6.982c.001 3.848-3.131 6.98-6.982 6.98zm0-10.963a3.985 3.985 0 00-3.98 3.982 3.984 3.984 0 003.98 3.98 3.985 3.985 0 003.982-3.98 3.985 3.985 0 00-3.982-3.982zM162.896 152.972H97.241a1.5 1.5 0 010-3h65.654a1.5 1.5 0 01.001 3zM143.255 64.931h-26.373a1.5 1.5 0 110-3h26.373a1.5 1.5 0 110 3zM73.681 138.353H52.948a2 2 0 01-2-2V104.87a2 2 0 012-2h7.764a2 2 0 010 4h-5.764v27.483H71.68V106.87h-6.135a2 2 0 010-4h8.135a2 2 0 012 2v31.483a2 2 0 01-1.999 2z" />
            <path d="M108.745 146.031c-.143 0-.286-.016-.428-.046l-35.064-7.679a2 2 0 01-1.572-1.954v-31.483a2 2 0 011.572-1.954l35.064-7.678a2.003 2.003 0 012.428 1.954v46.84a2.002 2.002 0 01-2 2zm-33.064-11.288l31.064 6.803v-41.87l-31.064 6.802v28.265zM52.54 132.43h-6.748a2.952 2.952 0 01-2.1-.869 2.939 2.939 0 01-.869-2.1v-17.698c0-.796.31-1.543.873-2.103a2.943 2.943 0 012.096-.866h6.748a2 2 0 010 4h-5.717v15.636h5.717a2 2 0 010 4z" />
            <path d="M81.378 172.383a.067.067 0 01-.02 0H68.435a2 2 0 01-1.951-1.56l-7.68-34.03a2 2 0 011.952-2.44h12.926a2 2 0 011.951 1.56l7.616 33.759a2.001 2.001 0 01-1.871 2.711zm-11.345-4h8.823l-6.774-30.03h-8.825l6.776 30.03zM116.982 99.716a1.5 1.5 0 01-.436-2.935l20.566-6.261a1.5 1.5 0 01.873 2.87l-20.566 6.261a1.498 1.498 0 01-.437.065zM137.551 137.46a1.51 1.51 0 01-.438-.065l-20.566-6.261a1.499 1.499 0 11.873-2.869l20.566 6.261a1.499 1.499 0 01-.435 2.934zM148.954 115.458h-29.307a1.5 1.5 0 010-3h29.307a1.5 1.5 0 010 3zM63.313 109.454a1.5 1.5 0 01-1.316-.78l-3.092-5.656-5.655-3.093a1.5 1.5 0 010-2.632l5.655-3.093 3.092-5.656a1.497 1.497 0 012.631 0l3.097 5.656 5.653 3.093a1.5 1.5 0 010 2.632l-5.653 3.093-3.097 5.656c-.262.481-.767.78-1.315.78zm-6.217-10.846l3.635 1.988c.252.138.459.345.597.596l1.987 3.636 1.99-3.636a1.5 1.5 0 01.596-.596l3.634-1.988-3.635-1.987a1.5 1.5 0 01-.596-.596l-1.99-3.636-1.987 3.636a1.508 1.508 0 01-.597.596l-3.634 1.987zM157.028 64.931a1.497 1.497 0 01-1.316-.781l-2.252-4.12-4.118-2.252a1.5 1.5 0 010-2.632l4.118-2.253 2.252-4.12a1.5 1.5 0 011.315-.781h.001c.548 0 1.053.299 1.315.78l2.256 4.121 4.119 2.253a1.5 1.5 0 010 2.632L160.6 60.03l-2.256 4.121a1.5 1.5 0 01-1.316.78zm-3.84-8.47l2.098 1.147c.252.138.459.345.597.597l1.147 2.1 1.15-2.101c.138-.251.344-.458.596-.596l2.098-1.147-2.098-1.148a1.5 1.5 0 01-.596-.596l-1.15-2.101-1.147 2.1a1.504 1.504 0 01-.597.597l-2.098 1.148zM75.347 80.011l2.127 3.886 3.884 2.124-3.884 2.126-2.127 3.887-2.125-3.887-3.887-2.126 3.887-2.124zM149.276 42.055l1.586 2.898 2.899 1.584-2.899 1.586-1.586 2.898-1.586-2.898-2.896-1.586 2.896-1.584z" />
            <g>
                <path d="M76.562 69.684c-2.943 0-5.885-.73-8.504-2.111a18.149 18.149 0 01-8.933-10.756 18.153 18.153 0 011.291-13.921 18.236 18.236 0 0116.174-9.752c2.943 0 5.884.73 8.503 2.111 8.91 4.698 12.338 15.768 7.642 24.678a18.239 18.239 0 01-16.173 9.751zm.028-33.541a15.245 15.245 0 00-13.52 8.152 15.164 15.164 0 00-1.079 11.634 15.165 15.165 0 007.465 8.99 15.09 15.09 0 007.105 1.765 15.243 15.243 0 0013.519-8.151c3.926-7.446 1.061-16.699-6.386-20.625a15.29 15.29 0 00-7.104-1.765z" />
                <path d="M76.575 52.913a1.502 1.502 0 01-1.328-2.199l7.818-14.833 2.654 1.398-5.575 10.576 10.597-5.535 1.389 2.659-14.86 7.764c-.22.114-.458.17-.695.17z" />
            </g>
            <g>
                <path d="M49.465 67.86l1.562 2.56-8.94 5.454-1.562-2.561zM42.084 76.285l8.493 5.177-1.56 2.56-8.494-5.177z" />
                <path d="M38.866 80.439c-2.407 0-4.365-1.958-4.365-4.363s1.958-4.363 4.365-4.363c2.406 0 4.363 1.958 4.363 4.363s-1.957 4.363-4.363 4.363zm0-5.726c-.753 0-1.365.611-1.365 1.363a1.365 1.365 0 002.728 0c0-.752-.611-1.363-1.363-1.363zM52.683 72.017c-2.407 0-4.365-1.958-4.365-4.363s1.958-4.363 4.365-4.363c2.405 0 4.361 1.958 4.361 4.363s-1.956 4.363-4.361 4.363zm0-5.726c-.753 0-1.365.611-1.365 1.363s.612 1.363 1.365 1.363a1.363 1.363 0 000-2.726zM52.683 88.862c-2.407 0-4.365-1.958-4.365-4.363s1.958-4.363 4.365-4.363c2.405 0 4.361 1.957 4.361 4.363s-1.956 4.363-4.361 4.363zm0-5.726c-.753 0-1.365.611-1.365 1.363s.612 1.363 1.365 1.363a1.363 1.363 0 000-2.726z" />
            </g>
        </svg>
    );
}

const IklanSem = React.memo(SvgComponent);
export default IklanSem;
