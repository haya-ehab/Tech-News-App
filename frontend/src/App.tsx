import { Toaster } from "./components/ui/toaster"

import { TooltipProvider } from "./components/ui/tooltip";
import { toast } from "@/hooks/use-toast";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Feed } from "./pages/Feed";
import { Bookmarks } from "./pages/Bookmarks";
import NotFound from "./pages/NotFound";



const App = () => (
  
    <TooltipProvider>
      <Toaster />
   
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Header />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>

);

export default App;
