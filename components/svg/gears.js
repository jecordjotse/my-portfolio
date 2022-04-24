import styled, { css, keyframes } from "styled-components";

export const Gear = (props) => (
  <svg viewBox="0 0 797.119 265.291" {...props}>
    <image
      width={797.119}
      height={265.291}
      style={{}}
      xlinkHref=" /banner1.webp"
    />
    <Gear1
      className="gear_1"
      style={{
        fill: "#fff",
        stroke: "rgb(0, 0, 0)",
        strokeOpacity: 0,
      }}
      d="M 519.394 192.746 C 518.388 193.276 517.335 193.712 516.248 194.049 L 516.242 235.177 C 527.947 234.082 539.214 229.505 548.475 221.818 L 519.394 192.746 Z M 505.289 194.049 C 504.202 193.712 503.149 193.276 502.143 192.746 L 472.979 221.901 C 478.832 226.739 485.811 230.561 493.817 232.955 C 497.602 234.087 501.446 234.825 505.296 235.182 L 505.289 194.049 Z M 494.393 184.996 C 493.864 183.99 493.427 182.937 493.091 181.851 L 451.906 181.844 C 453.034 193.584 457.615 204.93 465.241 214.159 L 494.393 184.996 Z M 493.091 170.891 C 493.427 169.805 493.864 168.752 494.393 167.746 L 465.262 138.604 C 457.215 148.208 452.871 159.489 451.862 170.898 L 493.091 170.891 Z M 502.143 159.996 C 503.149 159.466 504.202 159.03 505.289 158.693 L 505.296 117.514 C 493.574 118.601 482.289 123.18 473.016 130.877 L 502.143 159.996 Z M 516.248 158.693 C 517.335 159.03 518.388 159.466 519.394 159.996 L 548.564 130.835 C 542.701 125.978 535.705 122.141 527.676 119.74 C 523.906 118.612 520.076 117.876 516.242 117.517 L 516.248 158.693 Z M 527.144 167.746 C 527.674 168.752 528.11 169.805 528.446 170.891 L 569.591 170.898 C 568.473 159.162 563.904 147.819 556.293 138.586 L 527.144 167.746 Z M 528.446 181.851 C 528.11 182.937 527.674 183.99 527.144 184.996 L 556.23 214.093 C 564.266 204.501 568.61 193.237 569.626 181.844 L 528.446 181.851 Z M 516.229 181.831 C 520.432 177.628 518.509 170.451 512.767 168.912 C 510.102 168.198 507.259 168.96 505.308 170.911 C 501.105 175.114 503.028 182.291 508.77 183.83 C 511.435 184.544 514.278 183.782 516.229 181.831 Z M 564.057 230.527 L 561.767 232.689 L 551.779 224.04 C 551.12 224.607 550.449 225.16 549.768 225.699 L 556.36 237.149 L 553.802 238.987 L 545.056 229.083 C 544.327 229.557 543.589 230.016 542.842 230.459 L 547.849 242.686 L 545.069 244.167 L 537.721 233.186 C 536.936 233.558 536.143 233.915 535.343 234.254 L 538.676 247.04 L 535.723 248.136 L 529.904 236.274 C 529.076 236.539 528.243 236.786 527.405 237.016 L 529.005 250.132 L 525.932 250.825 L 521.746 238.293 C 520.89 238.445 520.031 238.579 519.17 238.695 L 519.007 251.907 L 515.87 252.184 L 513.391 239.206 C 512.523 239.243 511.654 239.261 510.785 239.262 L 508.862 252.334 L 505.716 252.191 L 504.99 238.998 C 504.124 238.918 503.26 238.821 502.399 238.706 L 498.751 251.405 L 495.652 250.843 L 496.69 237.671 C 495.843 237.477 495 237.266 494.162 237.036 L 488.854 249.136 L 485.857 248.167 L 488.642 235.251 C 487.828 234.945 487.021 234.623 486.221 234.284 L 479.348 245.569 L 476.507 244.209 L 480.988 231.779 C 480.223 231.368 479.465 230.941 478.717 230.499 L 470.401 240.766 L 467.767 239.039 L 473.866 227.318 C 473.161 226.809 472.468 226.285 471.786 225.746 L 462.175 234.814 L 459.795 232.751 L 467.401 221.948 C 466.771 221.349 466.154 220.737 465.549 220.113 L 454.816 227.818 L 452.731 225.457 L 461.71 215.763 C 461.165 215.086 460.635 214.397 460.119 213.698 L 448.455 219.904 L 446.703 217.286 L 456.894 208.876 C 456.444 208.132 456.01 207.379 455.592 206.617 L 443.205 211.213 L 441.818 208.385 L 453.039 201.408 C 452.692 200.61 452.363 199.806 452.05 198.995 L 439.16 201.9 L 438.163 198.912 L 450.213 193.492 C 449.976 192.656 449.757 191.815 449.555 190.97 L 436.393 192.13 L 435.803 189.036 L 448.468 185.271 C 448.345 184.411 448.24 183.548 448.152 182.683 L 434.953 182.079 L 434.781 178.934 L 447.835 176.891 C 447.827 176.022 447.838 175.152 447.866 174.284 L 434.865 171.926 L 435.114 168.786 L 448.323 168.5 C 448.432 167.638 448.558 166.778 448.702 165.921 L 436.132 161.851 L 436.797 158.772 L 449.926 160.25 C 450.149 159.41 450.389 158.575 450.646 157.744 L 438.73 152.035 L 439.799 149.072 L 452.615 152.287 C 452.947 151.484 453.296 150.688 453.661 149.9 L 442.613 142.653 L 444.067 139.859 L 456.34 144.754 C 456.777 144.002 457.229 143.26 457.696 142.527 L 447.712 133.873 L 449.526 131.298 L 461.037 137.784 C 461.569 137.097 462.116 136.422 462.677 135.758 L 453.936 125.85 L 456.077 123.54 L 466.62 131.503 C 467.24 130.893 467.872 130.296 468.516 129.713 L 461.173 118.728 L 463.603 116.724 L 472.991 126.021 C 473.686 125.5 474.392 124.993 475.109 124.5 L 469.295 112.635 L 471.971 110.972 L 480.036 121.438 C 480.794 121.014 481.562 120.605 482.337 120.213 L 478.157 107.679 L 481.03 106.387 L 487.629 117.835 C 488.437 117.515 489.252 117.213 490.073 116.927 L 487.601 103.948 L 490.62 103.051 L 495.634 115.275 C 496.478 115.067 497.325 114.875 498.177 114.702 L 497.457 101.509 L 500.569 101.022 L 503.909 113.806 C 504.773 113.712 505.639 113.635 506.506 113.576 L 507.551 100.405 L 510.7 100.338 L 512.306 113.453 C 513.175 113.474 514.043 113.514 514.91 113.571 L 517.702 100.657 L 520.831 101.01 L 520.675 114.222 C 521.533 114.359 522.389 114.514 523.24 114.686 L 527.728 102.259 L 530.783 103.026 L 528.867 116.099 C 529.699 116.35 530.526 116.617 531.347 116.902 L 537.452 105.184 L 540.377 106.351 L 536.736 119.052 C 537.527 119.411 538.311 119.787 539.087 120.178 L 546.699 109.378 L 549.442 110.925 L 544.14 123.027 C 544.877 123.489 545.604 123.965 546.321 124.457 L 555.304 114.767 L 557.817 116.666 L 550.949 127.954 C 551.618 128.51 552.275 129.079 552.92 129.661 L 563.114 121.256 L 565.352 123.473 L 557.041 133.744 C 557.629 134.384 558.205 135.036 558.766 135.699 L 569.99 128.727 L 571.912 131.223 L 562.306 140.295 C 562.804 141.007 563.287 141.73 563.756 142.462 L 575.808 137.049 L 577.381 139.778 L 566.651 147.489 C 567.05 148.261 567.433 149.042 567.799 149.83 L 580.466 146.071 L 581.66 148.986 L 569.999 155.198 C 570.291 156.016 570.567 156.841 570.825 157.671 L 583.879 155.634 L 584.675 158.682 L 572.289 163.284 C 572.47 164.134 572.633 164.988 572.778 165.845 L 585.988 165.567 L 586.37 168.693 L 573.481 171.604 C 573.547 172.47 573.595 173.338 573.624 174.207 L 586.753 175.691 L 586.715 178.841 L 573.554 180.008 C 573.503 180.875 573.435 181.742 573.348 182.607 L 586.163 185.828 L 585.705 188.944 L 572.506 188.347 C 572.34 189.2 572.157 190.049 571.956 190.895 L 584.226 195.795 L 583.357 198.823 L 570.355 196.471 C 570.077 197.295 569.782 198.112 569.471 198.924 L 580.978 205.416 L 579.714 208.301 L 567.141 204.237 C 566.756 205.016 566.355 205.787 565.937 206.549 L 576.477 214.517 L 574.839 217.208 L 562.921 211.505 C 562.435 212.225 561.935 212.936 561.42 213.636 L 570.803 222.938 L 568.821 225.386 L 557.769 218.145 C 557.192 218.795 556.601 219.432 555.997 220.057 L 564.057 230.527 Z"
    />
    <Gear2
      className="gear_2"
      d="M 78.426 48.022 C 78.426 51.906 75.277 55.055 71.393 55.055 C 67.509 55.055 64.36 51.906 64.36 48.022 C 64.36 44.138 67.509 40.989 71.393 40.989 C 75.277 40.989 78.426 44.138 78.426 48.022 Z M 107.763 48.022 C 107.763 51.906 104.614 55.055 100.73 55.055 C 96.846 55.055 93.697 51.906 93.697 48.022 C 93.697 44.138 96.846 40.989 100.73 40.989 C 104.614 40.989 107.763 44.138 107.763 48.022 Z M 93.095 33.052 C 93.095 36.936 89.946 40.085 86.062 40.085 C 82.178 40.085 79.029 36.936 79.029 33.052 C 79.029 29.168 82.178 26.019 86.062 26.019 C 89.946 26.019 93.095 29.168 93.095 33.052 Z M 93.095 62.992 C 93.095 66.876 89.946 70.025 86.062 70.025 C 82.178 70.025 79.029 66.876 79.029 62.992 C 79.029 59.108 82.178 55.959 86.062 55.959 C 89.946 55.959 93.095 59.108 93.095 62.992 Z M 75.776 34.913 C 75.776 36.245 74.697 37.324 73.365 37.324 C 72.033 37.324 70.954 36.245 70.954 34.913 C 70.954 33.581 72.033 32.502 73.365 32.502 C 74.697 32.502 75.776 33.581 75.776 34.913 Z M 101.169 34.913 C 101.169 36.245 100.09 37.324 98.758 37.324 C 97.426 37.324 96.347 36.245 96.347 34.913 C 96.347 33.581 97.426 32.502 98.758 32.502 C 100.09 32.502 101.169 33.581 101.169 34.913 Z M 75.776 61.131 C 75.776 62.463 74.697 63.542 73.365 63.542 C 72.033 63.542 70.954 62.463 70.954 61.131 C 70.954 59.799 72.033 58.72 73.365 58.72 C 74.697 58.72 75.776 59.799 75.776 61.131 Z M 101.169 61.131 C 101.169 62.463 100.09 63.542 98.758 63.542 C 97.426 63.542 96.347 62.463 96.347 61.131 C 96.347 59.799 97.426 58.72 98.758 58.72 C 100.09 58.72 101.169 59.799 101.169 61.131 Z M 86.578 42.912 C 86.578 43.281 86.278 43.581 85.909 43.581 C 85.54 43.581 85.24 43.281 85.24 42.912 C 85.24 42.543 85.54 42.243 85.909 42.243 C 86.278 42.243 86.578 42.543 86.578 42.912 Z M 90.08 44.526 C 90.08 44.895 89.78 45.195 89.411 45.195 C 89.042 45.195 88.742 44.895 88.742 44.526 C 88.742 44.157 89.042 43.857 89.411 43.857 C 89.78 43.857 90.08 44.157 90.08 44.526 Z M 91.625 48.196 C 91.625 48.565 91.325 48.865 90.956 48.865 C 90.587 48.865 90.287 48.565 90.287 48.196 C 90.287 47.827 90.587 47.527 90.956 47.527 C 91.325 47.527 91.625 47.827 91.625 48.196 Z M 89.822 51.544 C 89.822 51.913 89.522 52.213 89.153 52.213 C 88.784 52.213 88.484 51.913 88.484 51.544 C 88.484 51.175 88.784 50.875 89.153 50.875 C 89.522 50.875 89.822 51.175 89.822 51.544 Z M 86.603 53.218 C 86.603 53.587 86.303 53.887 85.934 53.887 C 85.565 53.887 85.265 53.587 85.265 53.218 C 85.265 52.849 85.565 52.549 85.934 52.549 C 86.303 52.549 86.603 52.849 86.603 53.218 Z M 82.547 51.737 C 82.547 52.106 82.247 52.406 81.878 52.406 C 81.509 52.406 81.209 52.106 81.209 51.737 C 81.209 51.368 81.509 51.068 81.878 51.068 C 82.247 51.068 82.547 51.368 82.547 51.737 Z M 81.71 48.388 C 81.71 48.757 81.41 49.057 81.041 49.057 C 80.672 49.057 80.372 48.757 80.372 48.388 C 80.372 48.019 80.672 47.719 81.041 47.719 C 81.41 47.719 81.71 48.019 81.71 48.388 Z M 82.998 44.655 C 82.998 45.024 82.698 45.324 82.329 45.324 C 81.96 45.324 81.66 45.024 81.66 44.655 C 81.66 44.286 81.96 43.986 82.329 43.986 C 82.698 43.986 82.998 44.286 82.998 44.655 Z M 62.258 54.37 C 62.41 54.944 62.583 55.513 62.777 56.074 L 58.756 59.118 L 59.628 61.063 L 64.575 60.088 C 64.866 60.606 65.175 61.114 65.502 61.609 L 62.365 65.558 L 63.692 67.224 L 68.242 65.05 C 68.652 65.48 69.078 65.894 69.518 66.293 L 67.461 70.897 L 69.162 72.182 L 73.028 68.944 C 73.532 69.258 74.047 69.554 74.572 69.831 L 73.725 74.802 L 75.692 75.623 L 78.631 71.526 C 79.197 71.705 79.77 71.863 80.348 72 L 80.764 77.026 L 82.872 77.332 L 84.7 72.633 C 85.294 72.665 85.888 72.676 86.481 72.666 L 88.134 77.43 L 90.253 77.202 L 90.855 72.195 C 91.437 72.079 92.015 71.942 92.588 71.784 L 95.373 75.988 L 97.369 75.24 L 96.707 70.241 C 97.242 69.984 97.768 69.708 98.283 69.412 L 102.026 72.791 L 103.773 71.571 L 101.889 66.893 C 102.343 66.511 102.784 66.113 103.21 65.698 L 107.676 68.04 L 109.064 66.424 L 106.076 62.362 C 106.421 61.879 106.748 61.383 107.058 60.876 L 111.966 62.034 L 112.909 60.123 L 109.004 56.932 C 109.218 56.378 109.412 55.816 109.586 55.248 L 114.627 55.149 L 115.065 53.063 L 110.49 50.944 C 110.56 50.354 110.608 49.762 110.635 49.168 L 115.493 47.818 L 115.399 45.689 L 110.44 44.774 C 110.361 44.186 110.26 43.6 110.139 43.019 L 114.509 40.503 L 113.888 38.464 L 108.857 38.811 C 108.634 38.261 108.391 37.719 108.129 37.186 L 111.736 33.662 L 110.628 31.842 L 105.841 33.429 C 105.488 32.951 105.118 32.487 104.732 32.036 L 107.349 27.726 L 105.823 26.238 L 101.582 28.966 C 101.121 28.591 100.647 28.233 100.16 27.892 L 101.624 23.067 L 99.776 22.006 L 96.346 25.702 C 95.807 25.454 95.258 25.225 94.702 25.016 L 94.92 19.978 L 92.866 19.41 L 90.463 23.843 C 89.879 23.737 89.291 23.651 88.7 23.587 L 87.658 18.654 L 85.527 18.614 L 84.303 23.506 C 83.71 23.548 83.12 23.611 82.532 23.696 L 80.295 19.177 L 78.222 19.668 L 78.252 24.711 C 77.689 24.899 77.132 25.107 76.584 25.336 L 73.294 21.515 L 71.408 22.506 L 72.691 27.383 C 72.192 27.705 71.705 28.045 71.231 28.403 L 67.094 25.52 L 65.513 26.95 L 67.969 31.354 C 67.566 31.79 67.179 32.241 66.809 32.705 L 62.084 30.942 L 60.909 32.719 L 64.383 36.374 C 64.102 36.897 63.839 37.43 63.595 37.972 L 58.581 37.438 L 57.885 39.453 L 62.159 42.129 C 62.016 42.705 61.894 43.287 61.793 43.872 L 56.803 44.603 L 56.63 46.727 L 61.435 48.256 C 61.44 48.85 61.466 49.443 61.514 50.035 L 56.863 51.984 L 57.223 54.084 L 62.258 54.37 Z M 84.776 46.528 C 85.953 45.549 87.748 46.212 88.007 47.72 C 88.127 48.421 87.864 49.132 87.318 49.586 C 86.141 50.564 84.346 49.902 84.087 48.393 C 83.967 47.693 84.23 46.982 84.776 46.528 Z"
      style={{
        fill: "#fff",
        stroke: "rgb(0, 0, 0)",
        strokeOpacity: 0,
      }}
    />
    <Gear3
      className="gear_3"
      d="M 270.599 132.723 C 241.666 103.839 192.261 117.054 181.671 156.511 C 176.756 174.823 182 194.362 195.428 207.767 C 224.361 236.651 273.766 223.436 284.356 183.979 C 289.271 165.667 284.027 146.128 270.599 132.723 Z M 268.872 134.447 C 296.476 162.004 283.847 209.059 246.139 219.146 C 228.638 223.827 209.966 218.832 197.155 206.043 C 169.551 178.486 182.18 131.431 219.888 121.344 C 237.389 116.663 256.061 121.658 268.872 134.447 Z M 288.254 218.662 L 286.22 220.888 L 275.093 216.843 C 274.455 217.419 273.806 217.982 273.145 218.532 L 275.571 230.121 L 273.079 231.818 L 263.184 225.316 C 262.431 225.729 261.669 226.128 260.899 226.51 L 260.587 238.346 L 257.771 239.422 L 249.642 230.814 C 248.814 231.042 247.981 231.254 247.144 231.449 L 244.11 242.893 L 241.122 243.292 L 235.197 233.04 C 234.339 233.072 233.479 233.086 232.62 233.082 L 227.029 243.519 L 224.029 243.217 L 220.629 231.876 C 219.786 231.709 218.946 231.524 218.111 231.322 L 210.264 240.188 L 207.415 239.203 L 206.721 227.383 C 205.94 227.026 205.165 226.653 204.399 226.264 L 194.719 233.081 L 192.174 231.465 L 194.225 219.804 C 193.547 219.276 192.879 218.734 192.223 218.179 L 181.232 222.58 L 179.128 220.421 L 183.813 209.548 C 183.275 208.877 182.75 208.196 182.24 207.505 L 170.53 209.253 L 168.981 206.666 L 176.047 197.166 C 175.678 196.39 175.325 195.606 174.988 194.816 L 163.19 193.816 L 162.279 190.942 L 171.346 183.328 C 171.166 182.487 171.003 181.643 170.857 180.796 L 159.608 177.103 L 159.384 174.096 L 169.963 168.778 C 169.981 167.919 170.017 167.06 170.071 166.202 L 159.977 160.014 L 160.453 157.037 L 171.972 154.301 C 172.188 153.47 172.422 152.642 172.672 151.82 L 164.277 143.471 L 165.426 140.684 L 177.266 140.679 C 177.668 139.919 178.086 139.168 178.519 138.426 L 172.276 128.365 L 174.037 125.918 L 185.559 128.644 C 186.125 127.998 186.705 127.363 187.298 126.741 L 183.543 115.512 L 185.821 113.537 L 196.404 118.846 C 197.104 118.348 197.814 117.864 198.534 117.395 L 197.47 105.603 L 200.142 104.206 L 209.216 111.813 C 210.012 111.49 210.815 111.183 211.623 110.893 L 213.308 99.173 L 216.23 98.43 L 223.304 107.925 C 224.153 107.794 225.005 107.68 225.859 107.584 L 230.201 96.569 L 233.215 96.52 L 237.91 107.39 C 238.766 107.458 239.621 107.544 240.474 107.648 L 247.239 97.931 L 250.184 98.579 L 252.245 110.238 C 253.062 110.502 253.875 110.783 254.681 111.08 L 263.504 103.185 L 266.22 104.494 L 265.537 116.315 C 266.271 116.761 266.997 117.221 267.713 117.696 L 278.119 112.049 L 280.46 113.949 L 277.069 125.294 C 277.681 125.897 278.281 126.512 278.868 127.14 L 290.296 124.044 L 292.135 126.433 L 286.22 136.69 C 286.676 137.418 287.118 138.155 287.544 138.901 L 299.378 138.524 L 300.617 141.273 L 292.496 149.889 C 292.772 150.702 293.032 151.522 293.275 152.346 L 304.876 154.709 L 305.448 157.669 L 295.558 164.179 C 295.64 165.035 295.703 165.892 295.75 166.75 L 306.494 171.725 L 306.367 174.737 L 295.243 178.791 C 295.125 179.642 294.989 180.491 294.836 181.337 L 304.144 188.655 L 303.326 191.557 L 291.566 192.936 C 291.255 193.738 290.927 194.532 290.584 195.32 L 297.953 204.587 L 296.487 207.222 L 284.727 205.853 C 284.239 206.56 283.737 207.258 283.221 207.945 L 288.254 218.662 Z M 250.294 186.03 C 262.53 172.636 255.676 151.019 237.959 147.12 C 229.736 145.311 221.173 148.026 215.494 154.242 C 203.259 167.637 210.112 189.253 227.83 193.152 C 236.053 194.961 244.616 192.247 250.294 186.03 Z M 239.661 170.02 C 239.661 173.732 236.651 176.742 232.939 176.742 C 229.227 176.742 226.217 173.732 226.217 170.02 C 226.217 166.308 229.227 163.298 232.939 163.298 C 236.651 163.298 239.661 166.308 239.661 170.02 Z"
      style={{
        fill: "#fff",
        stroke: "rgb(0, 0, 0)",
        strokeOpacity: 0,
      }}
    />
  </svg>
);

const gear_1_loading = keyframes`
0% {
    transform: rotate(0deg) scale(1);
    transform-origin: 510px 176px;
    filter: drop-shadow(-4px -1px 1px rgba(0, 0, 0, 0.5));
}
25% {
    transform: rotate(90deg) scale(1.05);
    transform-origin: 510px 176px;
    filter: drop-shadow(-1px 4px 1px rgba(0, 0, 0, 0.48));
}
50% {
    transform: rotate(180deg) scale(1.1);
    transform-origin: 510px 176px;
    filter: drop-shadow(4px 1px 1px rgba(0, 0, 0, 0.46));
}
75% {
    transform: rotate(270deg) scale(1.02);
    transform-origin: 510px 176px;
    filter: drop-shadow(1px -4px 1px rgba(0, 0, 0, 0.48));
}
100% {
  transform: rotate(360deg) scale(1);
  transform-origin: 510px 176px;
  filter: drop-shadow(-4px -1px 1px rgba(0, 0, 0, 0.5));
}
`;
const gear_2_loading = keyframes`
0% {
  transform: rotate(0deg);
  transform-origin: 86px 49px;
  filter: drop-shadow(-4px -1px 1px rgba(0, 0, 0, 0.5));
}
25% {
  transform: rotate(90deg) ;
  transform-origin: 86px 49px;
  filter: drop-shadow(-1px 4px 1px rgba(0, 0, 0, 0.5));
}
50% {
  transform: rotate(180deg) ;
  transform-origin: 86px 49px;
  filter: drop-shadow(4px 1px 1px rgba(0, 0, 0, 0.5));
}
75% {
  transform: rotate(270deg);
  transform-origin: 86px 49px;
  filter: drop-shadow(1px -4px 1px rgba(0, 0, 0, 0.5));
}
100% {
transform: rotate(360deg);
transform-origin: 86px 49px;
filter: drop-shadow(-4px -1px 1px rgba(0, 0, 0, 0.5));
}
`;
const gear_3_loading = keyframes`
0% {
    transform: rotate(360deg);
    transform-origin: 233px 170px;
    filter: drop-shadow(-4px -1px 1px rgba(0, 0, 0, 0.5));
}
25% {
    transform: rotate(270deg) ;
    transform-origin: 233px 170px;
    filter: drop-shadow(1px -4px 1px rgba(0, 0, 0, 0.5));
}
50% {
    transform: rotate(180deg) ;
    transform-origin: 233px 170px;
    filter: drop-shadow(4px 1px 1px rgba(0, 0, 0, 0.5));
}
75% {
    transform: rotate(90deg);
    transform-origin: 233px 170px;
    filter: drop-shadow(-1px 4px 1px rgba(0, 0, 0, 0.5));
}
100% {
  transform: rotate(0deg);
  transform-origin: 233px 170px;
  filter: drop-shadow(-4px -1px 1px rgba(0, 0, 0, 0.5));
}
`;

const Gear1 = styled.path`
  filter: drop-shadow(-4px -1px 1px rgba(0, 0, 0, 0.5));
  :hover {
    animation: ${css`
        ${gear_1_loading}`} 16s linear infinite;
  }

  :focus {
    animation: ${css`
        ${gear_1_loading}`} 2s linear infinite;
  }
`;
const Gear2 = styled.path`
  filter: drop-shadow(-4px -1px 1px rgba(0, 0, 0, 0.4));
  :hover {
    animation: ${css`
        ${gear_2_loading}`} 4s linear infinite;
  }
`;
const Gear3 = styled.path`
  filter: drop-shadow(-4px -1px 1px rgba(0, 0, 0, 0.4));
  :hover {
    animation: ${css`
        ${gear_3_loading}`} 8s linear infinite;
  }
`;
