const categoriesDetailsPage = ({ params }) => {
  console.log(params);
  if (params.features.length == 3) {
    return <div>{params.features[2]} </div>;
  }
  return (
    <div>
      <p>this is our category features page </p>
    </div>
  );
};

export default categoriesDetailsPage;
