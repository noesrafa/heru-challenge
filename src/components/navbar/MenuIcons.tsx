const HomeIcon = ({ color = "#1D8FF3" }) => {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.2337 0.535311C8.55047 0.28893 8.99405 0.28893 9.31083 0.535311L17.2059 6.6759C17.4195 6.84209 17.5445 7.09763 17.5445 7.36834V17.0178C17.5445 17.7158 17.2673 18.3852 16.7737 18.8787C16.2802 19.3722 15.6108 19.6495 14.9128 19.6495H2.63168C1.93371 19.6495 1.26434 19.3722 0.770801 18.8787C0.277265 18.3852 0 17.7158 0 17.0178V7.36834C0 7.09763 0.124981 6.84209 0.338661 6.6759L8.2337 0.535311ZM1.75445 7.79737V17.0178C1.75445 17.2505 1.84687 17.4736 2.01139 17.6381C2.1759 17.8026 2.39902 17.8951 2.63168 17.8951H14.9128C15.1455 17.8951 15.3686 17.8026 15.5331 17.6381C15.6977 17.4736 15.7901 17.2505 15.7901 17.0178V7.79737L8.77226 2.33908L1.75445 7.79737Z"
        fill={color}
      />
      <path
        d="M6.14058 18.7723V10H11.4039V18.7723"
        stroke={color}
        strokeWidth="1.75445"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ImageIcon = ({ color = "#1D8FF3" }) => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.1762 1.98217C2.69173 1.98217 2.29898 2.37492 2.29898 2.8594V15.1406C2.29898 15.625 2.69173 16.0178 3.1762 16.0178H15.4574C15.9419 16.0178 16.3346 15.625 16.3346 15.1406V2.8594C16.3346 2.37492 15.9419 1.98217 15.4574 1.98217H3.1762ZM0.544525 2.8594C0.544525 1.40596 1.72277 0.227722 3.1762 0.227722H15.4574C16.9108 0.227722 18.0891 1.40596 18.0891 2.8594V15.1406C18.0891 16.594 16.9108 17.7722 15.4574 17.7722H3.1762C1.72277 17.7722 0.544525 16.594 0.544525 15.1406V2.8594Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.24652 5.49109C6.00428 5.49109 5.8079 5.68746 5.8079 5.9297C5.8079 6.17194 6.00428 6.36831 6.24652 6.36831C6.48876 6.36831 6.68513 6.17194 6.68513 5.9297C6.68513 5.68746 6.48876 5.49109 6.24652 5.49109ZM4.05345 5.9297C4.05345 4.7185 5.03532 3.73663 6.24652 3.73663C7.45771 3.73663 8.43958 4.7185 8.43958 5.9297C8.43958 7.1409 7.45771 8.12277 6.24652 8.12277C5.03532 8.12277 4.05345 7.1409 4.05345 5.9297Z"
        fill={color}
      />
      <mask
        id="mask0_1_364"
        maskUnits="userSpaceOnUse"
        x="2"
        y="6"
        width="17"
        height="12"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.2054 6.62525C12.548 6.28267 13.1034 6.28267 13.446 6.62525L17.8321 11.0114C18.1747 11.354 18.1747 11.9094 17.8321 12.252C17.4896 12.5945 16.9341 12.5945 16.5916 12.252L12.8257 8.48613L3.79652 17.5153C3.45394 17.8579 2.89852 17.8579 2.55594 17.5153C2.21336 17.1727 2.21336 16.6173 2.55594 16.2747L12.2054 6.62525Z"
          fill={color}
        />
      </mask>
      <g mask="url(#mask0_1_364)"></g>
    </svg>
  );
};

export { HomeIcon, ImageIcon };