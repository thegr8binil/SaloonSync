import { Orb } from "@/app/layout";
import Modal from "@/components/Modal";
const navBar = () => {
  return (
    <main className="p-4 flex items-center justify-between text-sm sm:text-md md:text-xl max-w-11xl w-screen border-b border-slate-400">
      <div className="flex items-center gap-1 pl-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="51"
          height="48"
          viewBox="0 0 51 48"
          fill="none"
        >
          <path
            d="M40.8128 42.3L25.1036 27.25L18.9973 33.1C19.38 33.6667 19.6149 34.2167 19.7019 34.75C19.7889 35.2833 19.8324 35.8667 19.8324 36.5C19.8324 38.6333 19.0843 40.4167 17.5882 41.85C16.0921 43.2833 14.2306 44 12.0038 44C9.77704 44 7.91559 43.2833 6.41947 41.85C4.92335 40.4167 4.17529 38.6333 4.17529 36.5C4.17529 34.3667 4.92335 32.5833 6.41947 31.15C7.91559 29.7167 9.77704 29 12.0038 29C12.6301 29 13.2477 29.0833 13.8566 29.25C14.4655 29.4167 15.1004 29.6667 15.7615 30L21.8156 24.2L15.6571 18.3C15.0657 18.5667 14.4655 18.75 13.8566 18.85C13.2477 18.95 12.6301 19 12.0038 19C9.77704 19 7.91559 18.2833 6.41947 16.85C4.92335 15.4167 4.17529 13.6333 4.17529 11.5C4.17529 9.36667 4.92335 7.58333 6.41947 6.15C7.91559 4.71667 9.77704 4 12.0038 4C14.2306 4 16.0921 4.71667 17.5882 6.15C19.0843 7.58333 19.8324 9.36667 19.8324 11.5C19.8324 12.1333 19.7889 12.7333 19.7019 13.3C19.6149 13.8667 19.4322 14.4 19.1539 14.9L45.9797 40.6V42.3H40.8128ZM31.262 21.65L27.8175 18.35L40.8128 5.9H45.9797V7.55L31.262 21.65ZM12.0038 16C13.326 16 14.4394 15.5667 15.344 14.7C16.2486 13.8333 16.7009 12.7667 16.7009 11.5C16.7009 10.2333 16.2486 9.16667 15.344 8.3C14.4394 7.43333 13.326 7 12.0038 7C10.6817 7 9.56828 7.43333 8.66365 8.3C7.75902 9.16667 7.30671 10.2333 7.30671 11.5C7.30671 12.7667 7.75902 13.8333 8.66365 14.7C9.56828 15.5667 10.6817 16 12.0038 16ZM25.208 25.15C25.4863 25.15 25.7212 25.0583 25.9125 24.875C26.1039 24.6917 26.1996 24.4667 26.1996 24.2C26.1996 23.9333 26.1039 23.7083 25.9125 23.525C25.7212 23.3417 25.4863 23.25 25.208 23.25C24.9296 23.25 24.6948 23.3417 24.5034 23.525C24.312 23.7083 24.2163 23.9333 24.2163 24.2C24.2163 24.4667 24.312 24.6917 24.5034 24.875C24.6948 25.0583 24.9296 25.15 25.208 25.15ZM12.0038 41C13.326 41 14.4394 40.5667 15.344 39.7C16.2486 38.8333 16.7009 37.7667 16.7009 36.5C16.7009 35.2333 16.2486 34.1667 15.344 33.3C14.4394 32.4333 13.326 32 12.0038 32C10.6817 32 9.56828 32.4333 8.66365 33.3C7.75902 34.1667 7.30671 35.2333 7.30671 36.5C7.30671 37.7667 7.75902 38.8333 8.66365 39.7C9.56828 40.5667 10.6817 41 12.0038 41Z"
            fill="#0094FF"
          />
        </svg>
        <h1 className="font-medium">SalonSync</h1>
      </div>
      <div>
        <Modal buttonText="Contact Us" />
      </div>
    </main>
  );
};
export default navBar;