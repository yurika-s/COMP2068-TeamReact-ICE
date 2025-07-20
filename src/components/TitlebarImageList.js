import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

const TitlebarImageList = ({ itemData, handleClickDetail }) => {
  const handleIconClick = (event) => {
    const id = event.currentTarget.getAttribute('data-id');
    handleClickDetail(id);
  };
  return (
    <ImageList sx={{ width: 900 }}>
      <ImageListItem key='Subheader' cols={3} />

      {itemData.map((item) => (
        <ImageListItem key={item.id}>
          {item.image ? (
            <img
              srcSet={`${item.image}?w=320&fit=crop&auto=format&dpr=3 3x`}
              src={`${item.image}?w=320&fit=crop&auto=format`}
              alt={item.name}
              loading='lazy'
            />
          ) : (
            <img
              src='https://dummyimage.com/400x600/ddd/fff.png&text=No+Image'
              alt='None'
            />
          )}
          <ImageListItemBar
            title={item.name}
            subtitle={item.actor}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.name}`}
                data-id={item.id}
                onClick={handleIconClick}
              >
                <ReadMoreIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default TitlebarImageList;
