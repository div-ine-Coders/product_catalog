/* eslint-disable max-len */
import { ArrowDirection } from './constants';
import { ArrowButton } from './modules/_shared/components/atoms/ArrowButton';
import { BackButton } from './modules/_shared/components/atoms/BackButton';
import { ColorSelectorButton } from './modules/_shared/components/atoms/ColorSelectorButton';
import { DefaultButton } from './modules/_shared/components/atoms/DefaultButton';
import { Dropdown } from './modules/_shared/components/atoms/Dropdown';
import { FavouriteButton } from './modules/_shared/components/atoms/FavouriteButton';
import { PageSelectButton } from './modules/_shared/components/atoms/PageSelectButton';

export const App = () => {
  return (
    <>
      <h1>Test text for check</h1>
      <div style={{ backgroundColor: '#0F1121', display: 'flex' }}>
        {[1, 2, 3, 4, 5].map(num => (
          <div key={num} style={{ margin: '5px' }}>
            <PageSelectButton isSelected={Math.random() > 0.5}>
              {num}
            </PageSelectButton>
          </div>
        ))}

        <div style={{ margin: '5px' }}>
          <ArrowButton direction={ArrowDirection.Left} isDisabled={false} />
        </div>

        <div style={{ margin: '5px' }}>
          <ArrowButton direction={ArrowDirection.Right} isDisabled={true} />
        </div>

        <div style={{ margin: '5px' }}>
          <ArrowButton direction={ArrowDirection.Up} isDisabled={false} />
        </div>

        <div style={{ margin: '5px' }}>
          <ArrowButton direction={ArrowDirection.Down} isDisabled={true} />
        </div>
      </div>

      <div style={{ backgroundColor: '#0F1121', display: 'flex' }}>
        <div style={{ margin: '5px', display: 'flex' }}>
          <ColorSelectorButton />
        </div>

        <div style={{ margin: '5px', display: 'flex' }}>
          <ColorSelectorButton color="blue" isActive={true} />
        </div>

        <div style={{ margin: '5px', display: 'flex' }}>
          <ColorSelectorButton color="green" />
        </div>
      </div>

      <div style={{ backgroundColor: '#0F1121', display: 'flex' }}>
        <div
          style={{
            display: 'flex',
            width: '40px',
            height: '40px',
            margin: '5px',
          }}
        >
          <FavouriteButton isFavourite={false} />
        </div>
        <div
          style={{
            display: 'flex',
            width: '40px',
            height: '40px',
            margin: '5px',
          }}
        >
          <FavouriteButton isFavourite={true} />
        </div>
      </div>

      <div style={{ backgroundColor: '#0F1121', display: 'flex' }}>
        <div
          style={{
            margin: '5px',
            display: 'flex',
            height: '40px',
            width: '200px',
          }}
        >
          <DefaultButton isSelected={false}> Add to card </DefaultButton>
        </div>

        <div
          style={{
            margin: '5px',
            display: 'flex',
            height: '40px',
            width: '200px',
          }}
        >
          <DefaultButton isSelected={true}> Added </DefaultButton>
        </div>
      </div>

      <div style={{ margin: '5px' }}>
        <BackButton />
      </div>

      <div style={{ margin: '18px' }}>
        <Dropdown items={['Item 1', 'Item 2', 'Item 3']} />
      </div>
    </>
  );

  return <div>OUR PROJECT HERE cv</div>;
};
