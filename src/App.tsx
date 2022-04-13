import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransactionModal } from './Components/NewTransactionModal/index'
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] = useState(false);

  function handleOpenTransactionModal() {
    setisNewTransactionModalOpen(true);
  }
  function handleCloseTransactionModal() {
    setisNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>

      <Header onOpenNewTransactionModal={handleOpenTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />

      <GlobalStyle />

    </TransactionsProvider>
  );
}

