import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
const LogoutButton = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="w-full gap-4 ">
          LOGOUT
          <LogOut className="w-4 h-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Are you sure to logout?</AlertDialogTitle>
        <AlertDialogAction>Cancel</AlertDialogAction>
        <AlertDialogCancel>Logout</AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogoutButton;
