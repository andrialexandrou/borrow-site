import AccountPage from './pages/account-page';
import ExplorePage from './pages/explore-page';
import ItemDetail from './pages/item-detail';
import LoginView from './pages/login-view';
import NewItemForm from './pages/new-item-form';
import SearchResults from './pages/search-results';
import UserProfile from './pages/user-profile';

export default function Home() {
  return (
    <div>
      <AccountPage />
      <ExplorePage />
      <ItemDetail />
      <LoginView />
      <NewItemForm />
      <SearchResults />
      <UserProfile />
    </div>
  );
}