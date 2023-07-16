let content;
if (isLoggedIn) {
    content = <AdminPanle />;
} else {
    content = <LoginForm />;
}
return (
    <div>
        {content}
    </div>
);

<div>
{isLoggedIn ? (
    <AdminPanle />
) : (
    <LoginForm />
)}
</div>

<div>
    {isLoggedIn && <AdminPanle />}
</div>