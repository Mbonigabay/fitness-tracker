import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TrainingComponent } from "./components/training/training.component";
import { LoginComponent } from "./pages/auth/login/login.component";
import { SignupComponent } from "./pages/auth/signup/signup.component";
import { WelcomeComponent } from "./pages/welcome/welcome.component";

const routes: Routes = [
    { path: '', component: WelcomeComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: 'training', component: TrainingComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}