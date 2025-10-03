from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import ContactSerializer

from .serializers import ProjectSerializer
from .models import Project
from rest_framework.generics import ListAPIView


class ContactAPIView(APIView):
    """Simple endpoint to accept contact POSTs from the React frontend.

    Returns 201 and echoes submitted data on success. No DB persistence in
    this minimal example (hook to send email or save to model as needed).
    """

    def post(self, request, *args, **kwargs):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            # In a real app: send email, enqueue job, or save to DB.
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class ProjectListAPIView(ListAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()
    
    def get_serializer_context(self):
        # Ensure the serializer has access to the request so build_absolute_uri works
        context = super().get_serializer_context()
        context.update({"request": self.request})
        return context

