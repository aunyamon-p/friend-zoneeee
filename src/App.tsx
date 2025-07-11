
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Noei from "./pages/Noei";
import Post from "./pages/Post";
import Aomjai from "./pages/Aomjai";
import Ice from "./pages/Ice";
import Auto from "./pages/Auto";
import Ton from "./pages/Ton";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/noei" element={<Noei />} />
          <Route path="/post" element={<Post />} />
          <Route path="/aomjai" element={<Aomjai />} />
          <Route path="/ice" element={<Ice />} />
          <Route path="/auto" element={<Auto />} />
          <Route path="/ton" element={<Ton />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
