import { toggleTheme } from 'app/slices/themeSlice';
import { RootState } from 'app/store';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const { activeTheme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const isDark = activeTheme === 'dark';

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      aria-label="Toggle theme"
      className={cn(styles.themeSwitcher, {
        [styles.themeSwitcherDark]: isDark,
      })}
    ></button>
  );
};
