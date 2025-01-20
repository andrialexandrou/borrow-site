import AccountPage from './account-page';
import ExplorePage from './explore-page';
import ItemDetail from './item-detail';
import LoginView from './login-view';
import NewItemForm from './new-item-form';
import SearchResults from './search-results';
import UserProfile from './user-profile';

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