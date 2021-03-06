import { connect } from "react-redux";

import { clearData, setCategory, showMenu, startNewsFetch } from "../actions/";
import CategoryPage from "../components/pages/CategoryPage";

interface ICategoryContainerState {
  category: string;
  newsData: [];
  newsListNumber: number;
}

const mapStateToProps = (state: ICategoryContainerState) => {
  return {
    category: state.category,
    newsData: state.newsData,
    newsListNumber: state.newsListNumber,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  clearData: () => dispatch(clearData()),
  setCategory: (category?: string) => dispatch(setCategory(category)),
  showMenu: (isVisible: boolean) => dispatch(showMenu(isVisible)),
  startNewsFetch: (category?: string) => dispatch(startNewsFetch(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
