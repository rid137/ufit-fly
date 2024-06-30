interface CustomButtonTypes {
  type?: "submit" | "reset" | "button";
  children: React.ReactNode;
  cls?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CustomButton: React.FC<CustomButtonTypes> = ({
  type,
  onClick,
  children,
  disabled,
  cls=''
}) => {
  return (
    <button type={type} disabled={disabled} className={`${cls} text-center rounded-[1.2rem] `} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
