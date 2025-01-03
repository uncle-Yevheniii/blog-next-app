import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';
import { SigninForm } from './signin-form';

export default function Page() {
  return (
    <div className="flex min-h-[calc(100vh-56.8px)] w-full items-center justify-center">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Log In</CardTitle>
            <CardDescription>
              Enter your credentials below to authorize to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SigninForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
