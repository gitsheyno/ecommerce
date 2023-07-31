import DirectoryItem from "../directory-item/directory-item.component";
import categoriesMenu from "../categoriesMenu";
import "./directory.styles.scss";
const Directory = () => {
  return (
    <div className="categories-container">
      {categoriesMenu.map(({ title, id, imageUrl }) => {
        return <DirectoryItem key={id} imageUrl={imageUrl} title={title} />;
      })}
    </div>
  );
};

export default Directory;
