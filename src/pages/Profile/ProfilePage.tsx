import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
} from "@/components";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useAuthStore } from "@/store";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { z } from "zod";

const formProfileSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  email: z.string().email({ message: "Email invalido" }),
  address: z.string(),
});

const ProfilePage = () => {
  const logout = useAuthStore((state) => state.logout);
  const profile = useAuthStore((state) => state.profile);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formProfileSchema>>({
    resolver: zodResolver(formProfileSchema),
    defaultValues: {
      email: profile.email,
    },
  });

  const onSubmit = (values: z.infer<typeof formProfileSchema>) => {
    console.log({ values });
    toast("Iniciando Sesion!", { position: toast.POSITION.BOTTOM_RIGHT });
  };

  const onError = () => {
    toast("Error al ingresar los datos", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const onLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className={`flex flex-col gap-2 justify-center items-center h-screen`}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, onError)}>
          <Card className="w-[450px]">
            <CardHeader className="flex items-center gap-2">
              <CardTitle>Profile</CardTitle>
              <CardDescription>You can update the details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="profile flex justify-center py-4">
                  <img
                    src="assets/profile.png"
                    alt="avatar"
                    className="w-[135px] border-4 border-gray-100 rounded-full shadow-lg cursor-pointer hover:border-gray-200"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col space-y-1 5">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>FirstName</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              {...field}
                              placeholder="FirstName"
                            />
                          </FormControl>
                          <FormDescription>Nombres</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col space-y-1 5">
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>LastName</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              {...field}
                              placeholder="LastName"
                            />
                          </FormControl>
                          <FormDescription>Apellidos</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col space-y-1 5">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input type="text" {...field} placeholder="Phone" />
                          </FormControl>
                          <FormDescription>Número de telefono</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col space-y-1 5">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="text" {...field} placeholder="Email" />
                          </FormControl>
                          <FormDescription>Email</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-1 5">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input type="text" {...field} placeholder="Address" />
                        </FormControl>
                        <FormDescription>Direccion personal</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full">
                Modificar
              </Button>
              {/* <span className="text-xs">
                Al continuar, aceptas las Condiciones de uso y el Aviso de
                privacidad de Enatel Perú
              </span> */}
              <div className="text-center">
                <span className="text-gray-500 text-sm">
                  come back later?{" "}
                  <Link to="/signup" className="text-red-500">
                    Logout
                  </Link>
                </span>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>

      <Button variant={"destructive"} onClick={onLogout} type="button">
        Cerrar Sesion
      </Button>

      <ToastContainer />
      <DevTool control={form.control} />
    </div>
  );
};

export default ProfilePage;
