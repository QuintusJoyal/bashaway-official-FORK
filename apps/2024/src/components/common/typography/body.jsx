import { twMerge } from 'tailwind-merge';

const BodyText = ({ children, className, ...props }) => {
  return (
    <span
      className={twMerge('text-[1.25rem] sm:text-[1.75rem] text-center lg:text-start font-consolas', className)}
      {...props}>
      {children}
    </span>
  );
};

export default BodyText;
