FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.2-sdk AS build
WORKDIR /src
COPY ["Hackathon.Ok_Learning.Backend/Hackathon.Ok_Learning.Backend.csproj", "Hackathon.Ok_Learning.Backend/"]
RUN dotnet restore "Hackathon.Ok_Learning.Backend/Hackathon.Ok_Learning.Backend.csproj"
COPY . .
WORKDIR "/src/Hackathon.Ok_Learning.Backend"
RUN dotnet build "Hackathon.Ok_Learning.Backend.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Hackathon.Ok_Learning.Backend.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Hackathon.Ok_Learning.Backend.dll"]