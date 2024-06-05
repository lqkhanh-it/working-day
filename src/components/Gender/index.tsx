const GENDER_COLOR = {
  Female: "info",
  Male: "accent",
  Genderqueer: "secondary",
  Polygender: "primary",
};

const Gender = ({ gender }: { gender: string }) => {
  return (
    <span
      className={`badge badge-${
        GENDER_COLOR[gender as keyof typeof GENDER_COLOR]
      } `}
    >
      {gender}
    </span>
  );
};

export default Gender;
