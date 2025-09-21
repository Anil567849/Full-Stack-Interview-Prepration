import AccountProvider from './component/accountContext/AccountProvider';
import Messanger from './component/Messanger';
import TemplateProvider from './component/theme/TemplateProvider';

function App() {
  return (
    <div className="app">
      <TemplateProvider>
        <AccountProvider>
          <Messanger/>
        </AccountProvider>
      </TemplateProvider>
    </div>
  );
}

export default App;
