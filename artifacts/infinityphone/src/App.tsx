import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Vitrine from "@/pages/Vitrine";
import AdminDashboard from "@/pages/AdminDashboard";
import AdminProdutos from "@/pages/AdminProdutos";
import AdminProdutoNovo from "@/pages/AdminProdutoNovo";
import AdminEntrada from "@/pages/AdminEntrada";
import AdminSaida from "@/pages/AdminSaida";
import AdminHistorico from "@/pages/AdminHistorico";
import AdminRelatorios from "@/pages/AdminRelatorios";
import AdminConfiguracoes from "@/pages/AdminConfiguracoes";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, refetchOnWindowFocus: false },
  },
});

function Router() {
  return (
    <Switch>
      <Route path="/" component={Vitrine} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/admin/produtos" component={AdminProdutos} />
      <Route path="/admin/produtos/novo" component={AdminProdutoNovo} />
      <Route path="/admin/produtos/:id/editar" component={AdminProdutoNovo} />
      <Route path="/admin/entrada" component={AdminEntrada} />
      <Route path="/admin/saida" component={AdminSaida} />
      <Route path="/admin/historico" component={AdminHistorico} />
      <Route path="/admin/relatorios" component={AdminRelatorios} />
      <Route path="/admin/configuracoes" component={AdminConfiguracoes} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
