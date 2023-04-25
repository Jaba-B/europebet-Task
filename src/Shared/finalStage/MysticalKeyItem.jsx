function MysticalKeyItem({place, text}) {
    return (
      <div className="key-item">
        <div className="key-item__icon-container">
            <p>{place}</p>
        </div>
        <p className="key-item__text">{text}</p>
      </div>
    );
}
  
export default MysticalKeyItem;